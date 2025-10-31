from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.dtos.user_dto import UserLoginDTO, UserResponseDTO
from src.models.models import User, Account, Transaction, LoginHistory
from src.utils.database import get_db
from src.utils.security import hash_password, verify_password, create_access_token
import uuid

client_router = APIRouter(prefix="/client", tags=["client"])

# Device registration (after admin pre-registration)
@client_router.post("/register-device")
def register_device(email: str, password: str, device_id: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="Client not pre-registered")
    if not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail="Invalid password")
    if user.device_id:
        raise HTTPException(status_code=400, detail="Device already registered")
    user.device_id = device_id
    db.commit()
    return {"message": "Device registered. Awaiting admin verification."}

# Login (only verified devices)
@client_router.post("/login")
def login(credentials: UserLoginDTO, db: Session = Depends(get_db)):        
    user = db.query(User).filter(User.email == credentials.email).first()
    if not user or not verify_password(credentials.password, user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    if user.device_id != credentials.device_id or not user.is_verified:
        raise HTTPException(status_code=403, detail="Device not verified or not allowed")

    # Track login history
    login_record = LoginHistory(user_id=user.id, device_id=credentials.device_id)
    db.add(login_record)
    db.commit()

    token = create_access_token({"user_id": user.id, "role": user.role})
    return {"access_token": token, "token_type": "bearer"}


# Account & Transaction operations
@client_router.get("/balance")
def get_balance(user_id: str, db: Session = Depends(get_db)):
    account = db.query(Account).filter(Account.user_id == user_id).first()
    return {"balance": account.balance}

@client_router.post("/deposit")
def deposit(user_id: str, amount: float, db: Session = Depends(get_db)):
    account = db.query(Account).filter(Account.user_id == user_id).first()
    account.balance += amount
    txn = Transaction(account_id=account.id, type="deposit", amount=amount)
    db.add(txn)
    db.commit()
    return {"balance": account.balance}

@client_router.post("/withdraw")
def withdraw(user_id: str, amount: float, db: Session = Depends(get_db)):
    account = db.query(Account).filter(Account.user_id == user_id).first()
    if account.balance < amount:
        raise HTTPException(status_code=400, detail="Insufficient funds")
    account.balance -= amount
    txn = Transaction(account_id=account.id, type="withdraw", amount=amount)
    db.add(txn)
    db.commit()
    return {"balance": account.balance}

@client_router.get("/transactions")
def transaction_history(user_id: str, db: Session = Depends(get_db)):
    account = db.query(Account).filter(Account.user_id == user_id).first()
    txns = db.query(Transaction).filter(Transaction.account_id == account.id).all()
    return [{"type": t.type, "amount": t.amount, "created_at": t.created_at.isoformat()} for t in txns]

from sqlalchemy import Column, String, Boolean, DateTime, Float, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime  # <-- use this
import uuid

Base = declarative_base()

def generate_uuid():
    return str(uuid.uuid4())

class LoginHistory(Base):
    __tablename__ = "login_history"

    id = Column(String, primary_key=True, default=generate_uuid)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    device_id = Column(String, nullable=False)
    login_time = Column(DateTime, default=datetime.utcnow)  # <-- correct

    user = relationship("User", back_populates="login_history")

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, default=generate_uuid)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    device_id = Column(String, nullable=True)
    is_verified = Column(Boolean, default=False)
    role = Column(String, default="client")
    created_at = Column(DateTime, default=datetime.utcnow)
    accounts = relationship("Account", back_populates="user")
    login_history = relationship("LoginHistory", back_populates="user")  # link back

class Account(Base):
    __tablename__ = "accounts"
    id = Column(String, primary_key=True, default=generate_uuid)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    balance = Column(Float, default=0.0)
    user = relationship("User", back_populates="accounts")
    transactions = relationship("Transaction", back_populates="account")

class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(String, primary_key=True, default=generate_uuid)
    account_id = Column(String, ForeignKey("accounts.id"), nullable=False)
    type = Column(String, nullable=False)  # "deposit" or "withdraw"
    amount = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    account = relationship("Account", back_populates="transactions")

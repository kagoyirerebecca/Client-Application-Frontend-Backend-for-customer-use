from pydantic import BaseModel

class AccountDTO(BaseModel):
    balance: float

class TransactionDTO(BaseModel):
    type: str
    amount: float
    created_at: str
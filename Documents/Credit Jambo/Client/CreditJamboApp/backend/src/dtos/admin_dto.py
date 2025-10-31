# src/dtos/admin_dto.py
from pydantic import BaseModel

class TransactionDTO(BaseModel):
    type: str
    amount: float
    created_at: str

class LoginHistoryDTO(BaseModel):
    device_id: str
    login_time: str

class ClientOverviewDTO(BaseModel):
    id: str
    name: str
    email: str
    balance: float
    transactions: list[TransactionDTO]
    login_history: list[LoginHistoryDTO]

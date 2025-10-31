from pydantic import BaseModel, Field, EmailStr
from typing import Optional


class UserCreateDTO(BaseModel):
    name: str
    email: str
    password: str
    device_id: str | None = None

   

class UserLoginDTO(BaseModel):
    email: str
    password: str
    device_id: str

class UserResponseDTO(BaseModel):
    id: str
    name: str
    email: str
    role: str
    device_id: str | None
    is_verified: bool
    created_at: str

class AdminLoginDTO(BaseModel):
    email: str
    password: str

class AdminRegisterClientDTO(BaseModel):
    name: str
    email: str
    password: Optional[str]


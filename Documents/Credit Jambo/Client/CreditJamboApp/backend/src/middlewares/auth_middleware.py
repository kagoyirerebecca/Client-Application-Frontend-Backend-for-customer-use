# src/middlewares/auth_middleware.py
from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError
from src.utils.security import verify_access_token

bearer_scheme = HTTPBearer()

def get_current_user(required_role: str = None):
    async def wrapper(request: Request, credentials: HTTPAuthorizationCredentials = None):
        if credentials is None:
            raise HTTPException(status_code=401, detail="Missing token")
        token = credentials.credentials
        try:
            payload = verify_access_token(token)
            if required_role and payload.get("role") != required_role:
                raise HTTPException(status_code=403, detail="Forbidden")
            return payload
        except JWTError:
            raise HTTPException(status_code=401, detail="Invalid token")
    return wrapper

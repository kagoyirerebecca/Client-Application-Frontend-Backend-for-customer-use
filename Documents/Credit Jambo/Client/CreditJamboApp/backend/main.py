from fastapi import FastAPI
from src.controllers import client_controller, admin_controller
from fastapi.middleware.cors import CORSMiddleware
from src.utils.database import Base, engine

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Credit Jambo Savings System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(client_controller.client_router)
app.include_router(admin_controller.admin_router)

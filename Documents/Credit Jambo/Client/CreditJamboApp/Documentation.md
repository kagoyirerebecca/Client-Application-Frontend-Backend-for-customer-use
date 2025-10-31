# Credit Jambo Client Mobile App

**Credit Jambo Ltd – Savings Management System (Client App)**  
Built using **React Native (Expo, TypeScript)** with a **FastAPI (Python)** backend.

This mobile app allows Credit Jambo clients to securely register, log in, manage savings, deposit and withdraw funds, and view their transaction history.

---

## Features

- Device registration & admin verification  
-  Secure login using JWT  
-  Deposit and withdraw savings  
- Real-time balance updates  
-  Transaction history  
-  Login & device tracking  
-  Clean, modern UI matching Credit Jambo branding  

---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React Native (Expo, TypeScript) |
| Backend | FastAPI (Python) |
| Authentication | JWT |
| Database | SQLite / PostgreSQL |
| State Management | React Query |
| HTTP Client | Axios |
| UI Framework | React Native Paper / Styled Components |

---

##  Branding

| Color | Code | Use |
|--------|--------|------|
| Green | `#03AF52` | Primary brand color |
| Black | `#010101` | Secondary text/background |
| Gray | `#F5F5F5` | Background for UI |

---

##  Installation & Setup

###  Clone the repository
```bash
git clone https://github.com/kagoyirerebecca/Client-Application-Frontend-Backend-for-customer-use.git

## Install dependencies
npm install --legacy-peer-deps

## Configure environment variables

Copy .env.example into a new file named .env and update values:

cp .env.example .env

## Run the development server
npx expo start
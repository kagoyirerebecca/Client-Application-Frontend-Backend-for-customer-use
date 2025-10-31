
---

# 📘 **DOCUMENTATION.md**

```markdown
# 📘 Savings Management System - Technical Documentation

---

## 🏗️ System Overview

The Savings Management System allows both **clients** and **administrators** to manage and monitor financial transactions such as deposits, withdrawals, and balances.

The backend is built with **FastAPI** and handles authentication, data persistence, and transaction logic.  
The frontend (Next.js + React Query) connects via a clean service layer using `axios`.

---

## 🧩 Backend Overview

### 1. **Authentication**

- Admin and Client authentication handled via JWT tokens.
- Tokens are generated during login and required for accessing protected routes.

### 2. **Database Models**

| Model | Description |
|--------|--------------|
| **User** | Stores client details (name, email, password, device ID) |
| **Transaction** | Records deposits and withdrawals |
| **LoginHistory** | Tracks user login times, devices, and IPs |
| **Admin** | Stores admin credentials and access tokens |

### 3. **Routes**

#### 🧍 Client Routes (`/client`)
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/client/register` | POST | Register a new client |
| `/client/login` | POST | Authenticate client |
| `/client/deposit` | POST | Add money to account |
| `/client/withdraw` | POST | Withdraw money |
| `/client/transactions` | GET | View all client transactions |
| `/client/login-history` | GET | View login history |

#### 🧑‍💼 Admin Routes (`/admin`)
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/admin/login` | POST | Authenticate admin |
| `/admin/clients-overview` | GET | View all clients with their balances and transactions |
| `/admin/all-transactions` | GET | Get all transactions across the system |

---


---

### Services Layer

| File | Description |
|------|--------------|
| `apiClient.ts` | Base axios instance with JWT interceptor |
| `adminAuthService.ts` | Admin login & logout functionality |
| `adminClientService.ts` | Fetch clients overview and transactions |

---

### Example Frontend Flow

**Admin Login → Token Saved → Dashboard Displays Clients**

1. Admin enters email & password  
2. `adminAuthService.login()` sends POST to `/admin/login`  
3. Backend returns JWT → stored in `localStorage`  
4. `adminClientService.getClientsOverview()` fetches protected data using that token  
5. React Query caches results & updates UI automatically

---

## 🔐 Security

- JWT Authentication for all secure endpoints
- Hashed passwords (bcrypt)
- Device ID tracking
- Rate-limited login attempts (optional enhancement)
- Role-based route protection

---

## 📊 Future Enhancements

- Add monthly/weekly transaction analytics charts
- Email notifications for withdrawals
- Multi-device client verification
- Admin role management (SuperAdmin, Manager)
- Two-Factor Authentication (2FA)

---

## 🧑‍💻 Developer Notes

- Use **React Query Devtools** during development for API cache visualization.
- Ensure `.env.local` matches your FastAPI backend base URL.
- On production, use HTTPS and secure JWT cookie storage.

---

## 🧩 API Testing

You can test the backend API using **Swagger** 



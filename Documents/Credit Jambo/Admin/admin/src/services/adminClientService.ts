// src/services/admin/adminClientService.ts
import api from "@/services/apiClients";

export interface Transaction {
  type: string;
  amount: number;
  created_at: string;
}

export interface LoginHistory {
  device_id: string;
  login_time: string;
}

export interface ClientOverview {
  id: string;
  name: string;
  email: string;
  balance: number;
  transactions: Transaction[];
  login_history: LoginHistory[];
}

export interface TransactionRecord {
  transaction_id: string;
  client_id: string;
  client_name: string;
  type: string;
  amount: number;
  balance_after: number;
  performed_by: string;
  device_id: string;
  timestamp: string;
}

export const adminClientService = {
  getClientsOverview: async (): Promise<ClientOverview[]> => {
    const response = await api.get("/admin/clients-overview");
    return response.data;
  },

  getAllTransactions: async (): Promise<TransactionRecord[]> => {
    const response = await api.get("/admin/all-transactions");
    return response.data;
  },
};

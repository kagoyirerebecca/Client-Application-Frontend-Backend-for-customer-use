// src/services/admin/adminAuthService.ts
import api from "@/services/apiClients";

export interface AdminLoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export const adminAuthService = {
  login: async (data: AdminLoginPayload): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/admin/login", data);
    const token = response.data.access_token;

    // Save token in localStorage
    localStorage.setItem("token", token);

    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

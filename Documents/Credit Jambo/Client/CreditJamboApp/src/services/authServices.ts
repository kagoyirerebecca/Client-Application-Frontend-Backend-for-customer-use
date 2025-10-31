import { useMutation } from "@tanstack/react-query";
import { api } from "./api";

interface LoginData {
  email: string;
  password: string;
  device_id: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await api.post("/login", data);
      globalThis.authToken = response.data.access_token; // store token globally
      return response.data;
    },
  });
};

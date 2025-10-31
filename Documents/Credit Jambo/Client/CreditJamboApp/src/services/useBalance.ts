import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

export const useBalance = (userId: string) => {
  return useQuery({
    queryKey: ["balance", userId],
    queryFn: async () => {
      const response = await api.get(`/balance?user_id=${userId}`);
      return response.data;
    },
  });
};

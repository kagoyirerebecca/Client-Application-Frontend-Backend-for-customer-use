import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

export const useTransactions = (userId: string) => {
  return useQuery({
    queryKey: ["transactions", userId],
    queryFn: async () => {
      const response = await api.get(`/transactions?user_id=${userId}`);
      return response.data;
    },
  });
};

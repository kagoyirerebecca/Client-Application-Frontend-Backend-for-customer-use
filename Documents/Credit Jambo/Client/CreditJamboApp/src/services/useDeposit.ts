import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";

export const useDeposit = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (amount: number) => {
      const response = await api.post(`/deposit?user_id=${userId}&amount=${amount}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["balance", userId] });
      queryClient.invalidateQueries({ queryKey: ["transactions", userId] });
    },
  });
};

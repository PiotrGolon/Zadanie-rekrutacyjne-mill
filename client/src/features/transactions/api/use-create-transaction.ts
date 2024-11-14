import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Transaction } from "../types";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useMutation<
    Transaction,
    Error,
    Omit<Transaction, "id" | "type">
  >({
    mutationFn: async (newTransaction) => {
      const response = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create transaction");
      }

      const data: Transaction = await response.json();
      return data;
    },
    onSuccess: () => {
      enqueueSnackbar("Transaction completed successfully!", {
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => {
      enqueueSnackbar(error.message || "Unknown error occurred", {
        variant: "error",
      });
    },
  });

  return mutation;
};

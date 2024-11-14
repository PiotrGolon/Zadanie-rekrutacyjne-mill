import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useMutation<void, Error, number>({
    mutationFn: async (transactionId: number) => {
      const response = await fetch(
        `http://localhost:3000/transactions/${transactionId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete transaction");
      }
    },
    onSuccess: () => {
      enqueueSnackbar("Transaction deleted successfully!", {
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => {
      enqueueSnackbar(error.message || "Failed to delete transaction", {
        variant: "error",
      });
    },
  });

  return mutation;
};

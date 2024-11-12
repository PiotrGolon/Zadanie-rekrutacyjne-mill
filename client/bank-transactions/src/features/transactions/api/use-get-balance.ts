import { useMemo } from "react";

import { useGetTransactions } from "../api/use-get-transactions";

export const useGetBalance = () => {
  const {
    data: transactions,
    isLoading,
    isError,
    error,
  } = useGetTransactions();

  const balance = useMemo<number>(() => {
    if (!transactions) return 0;

    return transactions.reduce(
      (acc, transaction) => acc + (transaction.amount || 0),
      0
    );
  }, [transactions]);

  return { balance, isLoading, isError, error };
};

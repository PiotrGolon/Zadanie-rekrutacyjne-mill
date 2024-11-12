import { useMemo } from "react";

import useFilteredTransactions from "../hooks/use-filtered-transactions";

export const useGetBalance = () => {
  const {
    filteredData: transactions,
    isLoading,
    isError,
    error,
  } = useFilteredTransactions();

  const balance = useMemo<number>(() => {
    if (!transactions) return 0;

    return transactions.reduce(
      (acc, transaction) => acc + (transaction.amount || 0),
      0
    );
  }, [transactions]);

  return { balance, isLoading, isError, error };
};

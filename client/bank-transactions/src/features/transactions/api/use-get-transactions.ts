import { useQuery } from "@tanstack/react-query";

import { Transaction } from "../types";

export const useGetTransactions = () => {
  const query = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/transactions");
      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const data: Transaction[] = await response.json();

      const transactionsWithType: Transaction[] = data.map((transaction) => ({
        ...transaction,
        type: transaction.amount >= 0 ? "income" : "expense",
      }));

      const sortedTransactions = [...transactionsWithType].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });

      return sortedTransactions;
    },
  });

  return query;
};

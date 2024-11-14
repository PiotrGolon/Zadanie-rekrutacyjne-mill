import { useMemo } from "react";
import { useGetTransactions } from "../api/use-get-transactions";
import { useFilter } from "../../../hooks/use-filter";
import { Transaction } from "../types";

const useFilteredTransactions = () => {
  const { data, isLoading, isError, error } = useGetTransactions();
  const { filter } = useFilter();

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((transaction: Transaction) =>
      transaction.beneficiary.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  return { filteredData, isLoading, isError, error };
};

export default useFilteredTransactions;

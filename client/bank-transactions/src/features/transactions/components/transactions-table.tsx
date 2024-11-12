import { useState, useMemo, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useGetTransactions } from "../api/use-get-transactions";
import { useFilter } from "../../../hooks/use-filter";

import TransactionsLoader from "./transaction-loader";
import TransactionsError from "./transaction-error";
import TransactionsTableContent from "./transaction-table-content";

import { Transaction } from "../types";

const ITEMS_PER_PAGE = 20;

const TransactionsTable = () => {
  const { data, isLoading, isError, error } = useGetTransactions();
  const { filter } = useFilter();

  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((transaction: Transaction) =>
      transaction.beneficiary.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  const fetchMoreData = useCallback(() => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }, []);

  const visibleData = useMemo(() => {
    return filteredData.slice(0, visibleCount);
  }, [filteredData, visibleCount]);

  if (isLoading) {
    return <TransactionsLoader />;
  }

  if (isError) {
    return <TransactionsError message={(error as Error).message} />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <InfiniteScroll
        dataLength={visibleData.length}
        next={fetchMoreData}
        hasMore={visibleData.length < filteredData.length}
        loader={<TransactionsLoader />}
        endMessage={
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 2 }}
          >
            Wszystkie transakcje zostały wyświetlone.
          </Typography>
        }
        style={{ overflow: "visible" }}
      >
        <TransactionsTableContent transactions={visibleData} />
      </InfiniteScroll>
    </Box>
  );
};

export default TransactionsTable;

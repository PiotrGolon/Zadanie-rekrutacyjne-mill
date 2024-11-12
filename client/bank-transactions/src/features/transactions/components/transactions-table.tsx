import Box from "@mui/material/Box";

import useFilteredTransactions from "../hooks/use-filtered-transactions";
import useInfiniteScroll from "../hooks/use-infinite-scroll";

import TransactionsLoader from "./transaction-loader";
import TransactionsError from "./transaction-error";
import TransactionsTableContent from "./transaction-table-content";
import InfiniteScrollWrapper from "./infinite-scroll-wrapper";

const ITEMS_PER_PAGE = 20;

const TransactionsTable = () => {
  const { filteredData, isLoading, isError, error } = useFilteredTransactions();
  const { visibleData, fetchMoreData, hasMore } = useInfiniteScroll(
    filteredData,
    ITEMS_PER_PAGE
  );

  if (isLoading) return <TransactionsLoader />;
  if (isError) return <TransactionsError message={(error as Error).message} />;

  return (
    <Box sx={{ width: "100%" }}>
      <InfiniteScrollWrapper
        dataLength={visibleData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        noResultsMessage="Transactions matching the search criteria were not found."
      >
        <TransactionsTableContent transactions={visibleData} />
      </InfiniteScrollWrapper>
    </Box>
  );
};

export default TransactionsTable;

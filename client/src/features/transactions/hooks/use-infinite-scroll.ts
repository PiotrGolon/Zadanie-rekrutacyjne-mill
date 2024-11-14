import { useState, useCallback, useMemo } from "react";

import { Transaction } from "../types";

const useInfiniteScroll = (data: Transaction[], itemsPerPage: number) => {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const fetchMoreData = useCallback(() => {
    setVisibleCount((prev) => prev + itemsPerPage);
  }, [itemsPerPage]);

  const visibleData = useMemo(() => {
    return data.slice(0, visibleCount);
  }, [data, visibleCount]);

  const hasMore = visibleData.length < data.length;

  return { visibleData, fetchMoreData, hasMore };
};

export default useInfiniteScroll;

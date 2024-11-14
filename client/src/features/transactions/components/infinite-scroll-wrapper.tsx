import InfiniteScroll from "react-infinite-scroll-component";
import Typography from "@mui/material/Typography";

interface InfiniteScrollWrapperProps {
  children: React.ReactNode;
  dataLength: number;
  hasMore: boolean;
  noResultsMessage?: string;
  next: () => void;
}

const InfiniteScrollWrapper: React.FC<InfiniteScrollWrapperProps> = ({
  children,
  dataLength,
  hasMore,
  noResultsMessage,
  next,
}) => (
  <InfiniteScroll
    dataLength={dataLength}
    next={next}
    hasMore={hasMore}
    loader={
      <Typography variant="body2" color="text.secondary" align="center">
        Loading...
      </Typography>
    }
    endMessage={
      dataLength === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
          aria-live="polite"
        >
          {noResultsMessage}
        </Typography>
      ) : (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
          aria-live="polite"
        >
          All transactions have been displayed.
        </Typography>
      )
    }
    style={{ overflow: "visible" }}
  >
    {children}
  </InfiniteScroll>
);

export default InfiniteScrollWrapper;

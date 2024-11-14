import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const TransactionsLoader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <CircularProgress />
  </Box>
);

export default TransactionsLoader;

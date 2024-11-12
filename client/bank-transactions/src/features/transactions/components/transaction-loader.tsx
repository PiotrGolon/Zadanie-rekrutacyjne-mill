import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const TransactionsLoader: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <CircularProgress />
  </Box>
);

export default TransactionsLoader;

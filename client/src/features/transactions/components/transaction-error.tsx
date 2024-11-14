import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TransactionsErrorProps {
  message: string;
}

const TransactionsError = ({ message }: TransactionsErrorProps) => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <Typography color="error">Error: {message}</Typography>
  </Box>
);

export default TransactionsError;

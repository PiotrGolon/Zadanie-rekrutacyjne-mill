import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TransactionsErrorProps {
  message: string;
}

const TransactionsError: React.FC<TransactionsErrorProps> = ({ message }) => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <Typography color="error">Błąd: {message}</Typography>
  </Box>
);

export default TransactionsError;

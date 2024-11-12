import { useFilter } from "../../../hooks/use-filter";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const TransactionsFilter: React.FC = () => {
  const { filter, setFilter } = useFilter();

  return (
    <Box sx={{ mb: 2, mx: 2 }}>
      <TextField
        label="Filter by Beneficiary"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        aria-label="Filter transactions by beneficiary"
      />
    </Box>
  );
};

export default TransactionsFilter;

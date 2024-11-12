import { Grid, Typography } from "@mui/material";
import TransactionsTable from "./transactions-table";

const TransactionsTableOverview = () => {
  return (
    <Grid item xs={12} order={{ xs: 3, md: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mt: { xs: 4, md: 0 },
        }}
      >
        Transaction History
      </Typography>

      <TransactionsTable />
    </Grid>
  );
};

export default TransactionsTableOverview;

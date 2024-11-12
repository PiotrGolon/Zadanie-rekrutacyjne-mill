import { Card, CardContent, Grid, Box } from "@mui/material";

import BalanceDisplay from "./balance-display";
import TransactionsFilter from "./transaction-filter";
import TransferForm from "./transaction-form";

const TransactionsOverviewCard = () => {
  return (
    <Grid item xs={12}>
      <Card sx={{ boxShadow: 8 }}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { lg: "space-between" },
                  gap: { xs: 2, lg: 0 },
                  height: { lg: "100%" },
                }}
              >
                <BalanceDisplay />
                <TransactionsFilter />
              </Box>
            </Grid>

            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
              <TransferForm />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TransactionsOverviewCard;

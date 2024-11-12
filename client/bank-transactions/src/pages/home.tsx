import { Container, Grid } from "@mui/material";

import TransactionsOverviewCard from "../features/transactions/components/transaction-overview-card";
import TransactionsTableOverview from "../features/transactions/components/transactions-table-overview";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <TransactionsOverviewCard />
        <TransactionsTableOverview />
      </Grid>
    </Container>
  );
};

export default HomePage;

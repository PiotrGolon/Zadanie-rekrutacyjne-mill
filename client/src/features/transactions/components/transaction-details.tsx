import { Typography, Grid, Button } from "@mui/material";

import { generateTransactionPDF } from "../../../utils/pdf-utlis";

import { TransactionDetailsProps } from "../types";

const TransactionDetails = ({ transaction }: TransactionDetailsProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">
          <strong>ID:</strong> {transaction.id}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Amount:</strong>{" "}
          {transaction.amount.toLocaleString("pl-PL", {
            style: "currency",
            currency: "PLN",
          })}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Beneficiary:</strong> {transaction.beneficiary}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">
          <strong>Account:</strong> {transaction.account}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Adress:</strong> {transaction.address}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Date:</strong>{" "}
          {new Date(transaction.date).toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <strong>Description:</strong> {transaction.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          onClick={() => generateTransactionPDF(transaction)}
          sx={{
            mt: 2,
            width: {
              xs: "100%",
              sm: "100%",
              md: "auto",
            },
          }}
        >
          Wygeneruj Potwierdzenie
        </Button>
      </Grid>
    </Grid>
  );
};

export default TransactionDetails;

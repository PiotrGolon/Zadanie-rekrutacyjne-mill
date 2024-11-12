import { Typography, Grid, Button } from "@mui/material";
import { Transaction } from "../types";
import { generateTransactionPDF } from "../../../utils/pdf-utlis";

interface TransactionDetailsProps {
  transaction: Transaction;
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({
  transaction,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">
          <strong>ID:</strong> {transaction.id}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Kwota:</strong>{" "}
          {transaction.amount.toLocaleString("pl-PL", {
            style: "currency",
            currency: "PLN",
          })}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Beneficjent:</strong> {transaction.beneficiary}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">
          <strong>Konto:</strong> {transaction.account}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Adres:</strong> {transaction.address}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Data:</strong>{" "}
          {new Date(transaction.date).toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <strong>Opis:</strong> {transaction.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          onClick={() => generateTransactionPDF(transaction)}
        >
          Wygeneruj Potwierdzenie
        </Button>
      </Grid>
    </Grid>
  );
};

export default TransactionDetails;

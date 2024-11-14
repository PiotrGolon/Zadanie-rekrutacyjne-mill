import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  useTheme,
} from "@mui/material";

import TransactionRow from "./transaction-row";
import TransactionTableHead from "./transaction-table-head";

import { TransactionsTableContentProps } from "../types";

const TransactionsTableContent = ({
  transactions,
}: TransactionsTableContentProps) => {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 8 }}
    >
      <Table aria-label="transactions table">
        <TransactionTableHead />
        <TableBody>
          {transactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTableContent;

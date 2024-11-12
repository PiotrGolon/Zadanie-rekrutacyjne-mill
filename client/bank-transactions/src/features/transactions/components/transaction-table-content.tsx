import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  useTheme,
} from "@mui/material";
import { TransactionsTableContentProps } from "../types";
import TransactionRow from "./transaction-row";
import { useResponsive } from "../../../hooks/use-responsive";

const TransactionsTableContent = ({
  transactions,
}: TransactionsTableContentProps) => {
  const theme = useTheme();
  const { isDesktop, isTablet, isMobile } = useResponsive();

  // Definicja nagłówków dla różnych rozmiarów ekranów
  const renderTableHead = () => {
    if (isDesktop) {
      return (
        <TableRow
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#f5f5f5" : "#eeeeee",
          }}
        >
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Data
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Beneficjent
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Opis
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Kwota
          </TableCell>
          <TableCell
            align="center"
            sx={{ color: "#424242", fontWeight: "bold" }}
          ></TableCell>
        </TableRow>
      );
    } else if (isTablet) {
      return (
        <TableRow
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#f5f5f5" : "#eeeeee",
          }}
        >
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Beneficjent
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Kwota
          </TableCell>
          <TableCell
            align="center"
            sx={{ color: "#424242", fontWeight: "bold" }}
          ></TableCell>
        </TableRow>
      );
    } else if (isMobile) {
      return (
        <TableRow
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#f5f5f5" : "#eeeeee",
          }}
        >
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Beneficjent
          </TableCell>
        </TableRow>
      );
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 8 }}
    >
      <Table aria-label="transactions table">
        <TableHead>{renderTableHead()}</TableHead>
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

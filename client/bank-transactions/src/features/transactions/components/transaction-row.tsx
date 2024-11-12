import { useState } from "react";
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

import { Transaction } from "../types";
import ActionsMenu from "./actions-menu";
import TransactionDetails from "./transaction-details";
import { useResponsive } from "../../../hooks/use-responsive";

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
  const [open, setOpen] = useState(false);
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const theme = useTheme();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRow
        hover
        sx={{
          cursor: "pointer",
          "&:hover": {
            backgroundColor:
              transaction.type === "income"
                ? "#e8f5e9" // Zielony odcień
                : "#ffebee", // Czerwony odcień
          },
        }}
      >
        {isDesktop && (
          <>
            <TableCell>
              <Typography variant="body2">
                {new Date(transaction.date).toLocaleDateString("pl-PL", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </Typography>
            </TableCell>
            <TableCell>{transaction.beneficiary}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell
              sx={{
                color:
                  transaction.type === "income"
                    ? theme.palette.success.main
                    : theme.palette.error.main,
              }}
            >
              {transaction.amount.toLocaleString("pl-PL", {
                style: "currency",
                currency: "PLN",
              })}
            </TableCell>
            <TableCell align="center">
              <ActionsMenu onToggle={handleToggle} transaction={transaction} />
            </TableCell>
          </>
        )}
        {isTablet && (
          <>
            <TableCell>{transaction.beneficiary}</TableCell>
            <TableCell
              sx={{
                color:
                  transaction.type === "income"
                    ? theme.palette.success.main
                    : theme.palette.error.main,
              }}
            >
              {transaction.amount.toLocaleString("pl-PL", {
                style: "currency",
                currency: "PLN",
              })}
            </TableCell>
            <TableCell align="center">
              <ActionsMenu onToggle={handleToggle} transaction={transaction} />
            </TableCell>
          </>
        )}
        {isMobile && (
          <>
            <TableCell colSpan={3} sx={{ padding: "8px 16px" }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Beneficjent */}
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  {transaction.beneficiary}
                </Typography>

                {/* Przycisk Akcji i Kwota */}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <ActionsMenu
                    onToggle={handleToggle}
                    transaction={transaction}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color:
                        transaction.type === "income"
                          ? theme.palette.success.main
                          : theme.palette.error.main,
                      mt: 0.5, // Mały odstęp między przyciskiem a kwotą
                    }}
                  >
                    {transaction.amount.toLocaleString("pl-PL", {
                      style: "currency",
                      currency: "PLN",
                    })}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
          </>
        )}
      </TableRow>
      {/* Szczegóły transakcji */}
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={isDesktop ? 5 : isTablet ? 3 : 1}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {isDesktop && (
                <Box display="flex" justifyContent="space-between">
                  <TransactionDetails transaction={transaction} />
                </Box>
              )}
              {(isTablet || isMobile) && (
                <TransactionDetails transaction={transaction} />
              )}
              <Button variant="contained" onClick={handleToggle} sx={{ mt: 2 }}>
                Zwiń Szczegóły
              </Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TransactionRow;

import { TableCell, Typography, Box, useTheme } from "@mui/material";

import ActionsMenu from "./actions-menu";

import { TransactionRowContentProps } from "../types";

import MotionTableRow from "./motion-table-row";
import { AnimatePresence } from "framer-motion";

const TransactionRowContent = ({
  transaction,
  onToggle,
  isDesktop,
  isTablet,
  isMobile,
  onDelete,
  exitingRowId,
}: TransactionRowContentProps) => {
  const theme = useTheme();

  const isExiting = transaction.id === exitingRowId;

  return (
    <AnimatePresence>
      <MotionTableRow
        key={transaction.id}
        exit={
          isExiting
            ? { opacity: 0, x: -100, transition: { duration: 0.5 } }
            : undefined
        }
        transition={{
          duration: 0.5,
        }}
        style={{ position: isExiting ? "absolute" : "static" }}
        layout
        sx={{
          cursor: "pointer",
          transition: "background-color 200ms ease",
          "&:hover": {
            backgroundColor: "#ebebeb",
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
              <ActionsMenu
                onToggle={onToggle}
                onDelete={onDelete}
                transaction={transaction}
              />
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
              <ActionsMenu
                onToggle={onToggle}
                onDelete={onDelete}
                transaction={transaction}
              />
            </TableCell>
          </>
        )}

        {isMobile && (
          <TableCell colSpan={3} sx={{ padding: "8px 16px" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                {transaction.beneficiary}
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <ActionsMenu
                  onToggle={onToggle}
                  onDelete={onDelete}
                  transaction={transaction}
                />
                <Typography
                  variant="h4"
                  sx={{
                    color:
                      transaction.type === "income"
                        ? theme.palette.success.main
                        : theme.palette.error.main,
                    mt: 0.5,
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
        )}
      </MotionTableRow>
    </AnimatePresence>
  );
};

export default TransactionRowContent;

import { TableRow, TableCell, Collapse, Box, Button } from "@mui/material";

import TransactionDetails from "./transaction-details";

import { TransactionDetailsRowProps } from "../types";

const TransactionDetailsRow = ({
  transaction,
  open,
  onToggle,
  colSpan,
  isDesktop,
  isTablet,
  isMobile,
}: TransactionDetailsRowProps) => (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={colSpan}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box margin={1}>
          {isDesktop && (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TransactionDetails transaction={transaction} />
            </Box>
          )}
          {(isTablet || isMobile) && (
            <TransactionDetails transaction={transaction} />
          )}
          <Button
            variant="contained"
            onClick={onToggle}
            sx={{
              my: 2,
              width: {
                xs: "100%",
                sm: "100%",
                md: "auto",
              },
            }}
          >
            Zwiń Szczegóły
          </Button>
        </Box>
      </Collapse>
    </TableCell>
  </TableRow>
);

export default TransactionDetailsRow;

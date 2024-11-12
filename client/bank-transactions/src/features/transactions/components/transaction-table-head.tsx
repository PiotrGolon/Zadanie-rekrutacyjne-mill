import { useResponsive } from "../../../hooks/use-responsive";
import { TableCell, TableHead, TableRow, useTheme } from "@mui/material";

const TransactionTableHead = () => {
  const theme = useTheme();
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <TableHead>
      {isDesktop && (
        <TableRow
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#f5f5f5" : "#eeeeee",
          }}
        >
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Date
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Beneficiary
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Description
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Amount
          </TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
      )}
      {isTablet && (
        <TableRow
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#f5f5f5" : "#eeeeee",
          }}
        >
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Beneficiary
          </TableCell>
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Amount
          </TableCell>
          <TableCell
            align="center"
            sx={{ color: "#424242", fontWeight: "bold" }}
          ></TableCell>
        </TableRow>
      )}
      {isMobile && (
        <TableRow
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#f5f5f5" : "#eeeeee",
          }}
        >
          <TableCell sx={{ color: "#424242", fontWeight: "bold" }}>
            Beneficiary
          </TableCell>
        </TableRow>
      )}
    </TableHead>
  );
};

export default TransactionTableHead;

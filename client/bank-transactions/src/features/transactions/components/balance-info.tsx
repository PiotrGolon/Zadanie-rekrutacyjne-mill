import { Typography, Box } from "@mui/material";

import { useResponsive } from "../../../hooks/use-responsive";

interface BalanceInfoProps {
  balance: number;
}

const BalanceInfo = ({ balance }: BalanceInfoProps) => {
  const { isDesktop } = useResponsive();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        alignItems: "center",
        justifyContent: "space-between",
        mx: 2,
        my: 3,
      }}
    >
      <Typography variant="h3">Balance:</Typography>
      <Typography
        variant="h3"
        color={balance >= 0 ? "success.main" : "error.main"}
      >
        {balance.toLocaleString("pl-PL", {
          style: "currency",
          currency: "PLN",
        })}
      </Typography>
    </Box>
  );
};

export default BalanceInfo;

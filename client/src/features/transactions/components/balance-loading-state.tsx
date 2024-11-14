import { Box, CircularProgress } from "@mui/material";

const BalanceLoadingState = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      my: 4,
    }}
  >
    <CircularProgress aria-label="Loading balance" />
  </Box>
);

export default BalanceLoadingState;

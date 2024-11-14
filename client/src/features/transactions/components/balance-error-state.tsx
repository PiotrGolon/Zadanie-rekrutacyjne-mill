import { Box, Alert } from "@mui/material";

import { BalanceErrorStateProps } from "../../../utils/types";

const BalanceErrorState = ({ message }: BalanceErrorStateProps) => (
  <Box sx={{ my: 4 }}>
    <Alert severity="error" role="alert">
      Error: {message}
    </Alert>
  </Box>
);

export default BalanceErrorState;

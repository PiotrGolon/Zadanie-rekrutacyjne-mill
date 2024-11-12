import { useGetBalance } from "../api/use-get-balance";

import BalanceLoadingState from "./balance-loading-state";
import BalanceErrorState from "./balance-error-state";
import BalanceInfo from "./balance-info";

const BalanceDisplay = () => {
  const { balance, isLoading, isError, error } = useGetBalance();

  if (isLoading) {
    return <BalanceLoadingState />;
  }

  if (isError) {
    return <BalanceErrorState message={(error as Error).message} />;
  }

  return <BalanceInfo balance={balance} />;
};

export default BalanceDisplay;

import { useState } from "react";

import { useResponsive } from "../../../hooks/use-responsive";

import TransactionRowContent from "./transaction-row-content";
import TransactionDetailsRow from "./transaction-details-row";

import { TransactionRowProps } from "../types";

const TransactionRow = ({ transaction }: TransactionRowProps) => {
  const [open, setOpen] = useState(false);
  const [exitingRowId, setExitingRowId] = useState<number | null>(null);
  const { isDesktop, isTablet, isMobile } = useResponsive();

  const handleToggle = () => setOpen((prev) => !prev);

  const handleDelete = () => {
    setExitingRowId(transaction.id);
    setTimeout(() => {
      setExitingRowId(null);
    }, 500);
  };

  return (
    <>
      <TransactionRowContent
        transaction={transaction}
        onToggle={handleToggle}
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile}
        onDelete={handleDelete}
        exitingRowId={exitingRowId}
      />
      <TransactionDetailsRow
        transaction={transaction}
        open={open}
        onToggle={handleToggle}
        colSpan={isDesktop ? 5 : isTablet ? 3 : 1}
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </>
  );
};

export default TransactionRow;

import { useState } from "react";
import { useDeleteTransaction } from "../api/use-delete-transactions";
import { generateTransactionPDF } from "../../../utils/pdf-utlis";

import { ActionsMenuProps } from "../types";

const useActionsMenu = ({
  transaction,
  onToggle,
  onDelete,
}: ActionsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { mutate: deleteTransaction } = useDeleteTransaction();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGeneratePDF = () => {
    generateTransactionPDF(transaction);
    handleClose();
  };

  const handleToggleAndClose = () => {
    onToggle();
    handleClose();
  };

  const handleDeleteClick = () => {
    setConfirmOpen(true);
    handleClose();
  };

  const handleConfirmDelete = () => {
    onDelete();
    deleteTransaction(transaction.id);
    setConfirmOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmOpen(false);
  };

  return {
    anchorEl,
    open,
    confirmOpen,
    handleClick,
    handleClose,
    handleGeneratePDF,
    handleToggleAndClose,
    handleDeleteClick,
    handleConfirmDelete,
    handleCancelDelete,
  };
};

export default useActionsMenu;

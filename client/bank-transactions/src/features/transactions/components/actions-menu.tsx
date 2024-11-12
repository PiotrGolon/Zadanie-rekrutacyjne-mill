import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { generateTransactionPDF } from "../../../utils/pdf-utlis";
import { Transaction } from "../types";

interface ActionsMenuProps {
  onToggle: () => void;
  transaction: Transaction;
}

const ActionsMenu: React.FC<ActionsMenuProps> = ({ onToggle, transaction }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleToggleAndClose}>Detale</MenuItem>
        {/* Możesz dodać inne opcje jak Edycja, Usunięcie */}
        <MenuItem onClick={handleGeneratePDF}>Wygeneruj Potwierdzenie</MenuItem>
      </Menu>
    </>
  );
};

export default ActionsMenu;

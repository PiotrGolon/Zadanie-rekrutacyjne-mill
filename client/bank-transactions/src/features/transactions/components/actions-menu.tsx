import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ConfirmDeleteDialog from "./confirm-dialog";

import { ActionsMenuProps } from "../types";
import useActionsMenu from "../hooks/use-actions-menu";

const ActionsMenu = ({ onToggle, onDelete, transaction }: ActionsMenuProps) => {
  const {
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
  } = useActionsMenu({ transaction, onToggle, onDelete });

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
        <MenuItem onClick={handleToggleAndClose}>Details</MenuItem>
        <MenuItem onClick={handleGeneratePDF}>Generate Confirmation</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>
      <ConfirmDeleteDialog
        open={confirmOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default ActionsMenu;

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

import { ConfirmDeleteDialogProps } from "../types";

const ConfirmDeleteDialog = ({
  open,
  onConfirm,
  onCancel,
}: ConfirmDeleteDialogProps) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Confirm Delete
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this transaction?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCancel}
          variant="outlined"
          sx={{ fontWeight: "bold" }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{ fontWeight: "bold", color: "white" }}
          data-testid="confirm-delete-action"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;

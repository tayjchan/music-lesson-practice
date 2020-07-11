import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const DeleteButton = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton aria-label='delete' onClick={() => !open && setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        // aria-labelledby='simple-modal-title'
        // aria-describedby='simple-modal-description'
      >
        <DialogContent>
          Are you sure you want to delete <i>{title}</i>?<br />
          This action cannot be undone.
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;

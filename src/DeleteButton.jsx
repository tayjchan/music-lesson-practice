import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { deleteVideo } from "./Firestore";

const DeleteButton = ({ title, videoId }) => {
  const [open, setOpen] = useState(false);
  async function handleDelete() {
    await deleteVideo(videoId);
    setOpen(false);
  }
  return (
    <>
      <IconButton aria-label='delete' onClick={() => !open && setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          Are you sure you want to delete <i>{title}</i>?<br />
          This action cannot be undone.
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleDelete} type='button'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;

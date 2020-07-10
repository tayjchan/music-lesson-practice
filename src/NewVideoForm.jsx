import React from "react";
import { InputBase, Button, TextField } from "@material-ui/core";

const NewVideoForm = () => (
  <>
    <h2 style={{ fontSize: "0.75rem", textAlign: "left" }}>
      ADDING A NEW VIDEO
    </h2>
    <form>
      <TextField label='Title' fullWidth margin='normal' />
      <TextField
        label='Description'
        multiline
        rows={4}
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <InputBase type='file' label='Video file' fullWidth />

      {/* TODO: Pin to bottom of screen */}
      <Button
        variant='outlined'
        color='primary'
        fullWidth
        size='large'
        margin='normal'
      >
        Upload
      </Button>
    </form>
  </>
);

export default NewVideoForm;

import React from "react";
import { InputBase, Button, TextField } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const NewVideoForm = () => (
  <>
    <Button variant='text' startIcon={<ArrowBackIcon />}>
      Back
    </Button>
    <h2>ADDING A NEW VIDEO</h2>
    <p>Fill out the form below to add and upload a new video.</p>
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
      <InputBase type='file' label='Video file' fullWidth required />

      <Button
        className='primaryButton'
        fullWidth
        variant='contained'
        margin='normal'
      >
        Upload
      </Button>
    </form>
  </>
);

export default NewVideoForm;

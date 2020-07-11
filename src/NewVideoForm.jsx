import React, { useState } from "react";
import { InputBase, Button, TextField } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { addNewVideo } from "./Firestore";

const NewVideoForm = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  function submitForm(event) {
    event.preventDefault();
    addNewVideo(title, description, file);
  }
  return (
    <>
      <Button variant='text' startIcon={<ArrowBackIcon />}>
        Back
      </Button>
      <h2>ADDING A NEW VIDEO</h2>
      <p>Fill out the form below to add and upload a new video.</p>
      <form>
        <TextField
          label='Title'
          fullWidth
          margin='normal'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label='Description'
          multiline
          rows={4}
          variant='outlined'
          fullWidth
          margin='normal'
          title={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* TODO: Only allow video files */}
        <InputBase
          type='file'
          label='Video file'
          fullWidth
          required
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />

        <Button
          className='primaryButton'
          fullWidth
          variant='contained'
          margin='normal'
          type='submit'
          onClick={submitForm}
        >
          Upload
        </Button>
      </form>
    </>
  );
};

export default NewVideoForm;

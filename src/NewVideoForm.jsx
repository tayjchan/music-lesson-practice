import React, { useState } from "react";
import { InputBase, Button, TextField } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { addNewVideo } from "./Firestore";
import { useHistory } from "react-router-dom";

const NewVideoForm = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState([]);

  const history = useHistory();

  async function submitForm(event) {
    event.preventDefault();
    await addNewVideo(title, description, file);

    history.push("/");
  }
  return (
    <>
      <Button
        variant='text'
        startIcon={<ArrowBackIcon />}
        onClick={() => history.push("/")}
      >
        Back
      </Button>
      <h2>ADDING A NEW VIDEO</h2>
      <p>Fill out the form below to add and upload a new video.</p>
      <form>
        <TextField
          label='Title'
          fullWidth
          margin='normal'
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label='Description'
          multiline
          rows={4}
          variant='outlined'
          fullWidth
          margin='normal'
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* TODO: Only allow video files */}
        <InputBase
          type='file'
          label='Video file'
          fullWidth
          required
          onChange={(e) => setFile(e.target.files[0])}
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

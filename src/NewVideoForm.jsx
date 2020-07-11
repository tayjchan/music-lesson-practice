import React, { useState, useEffect } from "react";
import {
  InputBase,
  Button,
  TextField,
  LinearProgress,
} from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { addNewVideo } from "./Firestore";
import { useHistory } from "react-router-dom";

const NewVideoForm = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState([]);
  const [progress, setProgress] = useState();
  const history = useHistory();

  useEffect(() => {
    setTimeout(function () {
      if (progress === 100) {
        history.push("/");
      }
    }, 1000);
  }, [progress, history]);

  async function submitForm(event) {
    event.preventDefault();
    addNewVideo(title, description, file, setProgress);
  }
  return (
    <>
      <Button
        variant='text'
        startIcon={<ArrowBackIcon />}
        disabled={progress < 100}
        onClick={() => history.push("/")}
      >
        Back
      </Button>
      <h2>ADDING A NEW VIDEO</h2>
      <p>Fill out the form below to add and upload a new video.</p>
      {/* TODO: Form validation */}
      <form>
        <TextField
          label='Title'
          fullWidth
          margin='normal'
          required
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
          disabled={progress < 100}
          onClick={submitForm}
        >
          Upload
        </Button>
        {progress && <LinearProgress variant='determinate' value={progress} />}
      </form>
    </>
  );
};

export default NewVideoForm;

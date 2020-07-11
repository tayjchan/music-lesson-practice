import React from "react";
import "./App.scss";
import VideoList from "./VideosList";
import { Button } from "@material-ui/core";
import NewVideoForm from "./NewVideoForm";

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Al's Music Thing</h1>
      </header>
      <main>
        {/* On Click go to NewVideoForm  */}
        <Button
          className='primaryButton'
          fullWidth
          variant='contained'
          margin='normal'
        >
          ADD NEW VIDEO
        </Button>
        <VideoList />
        <NewVideoForm />
      </main>
    </div>
  );
}

export default App;

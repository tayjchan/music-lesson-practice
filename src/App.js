import React from "react";
import "./App.css";
import NewVideoForm from "./NewVideoForm";
import VideoList from "./VideosList";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Al's Music Thing</h1>
      </header>
      <div style={{ margin: "0 2rem " }}>
        {/* On Click go to NewVideoForm  */}
        <Button
          variant='outlined'
          color='primary'
          fullWidth
          size='large'
          margin='normal'
        >
          ADD NEW VIDEO
        </Button>
        <VideoList />
        <NewVideoForm />
      </div>
    </div>
  );
}

export default App;

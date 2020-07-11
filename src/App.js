import React from "react";
import "./App.scss";
import VideoList from "./VideosList";
import NewVideoForm from "./NewVideoForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>Al's Music Thing</h1>
        </header>
        <main>
          <Switch>
            <Route path='/' exact component={VideoList} />
            <Route path='/new' component={NewVideoForm} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

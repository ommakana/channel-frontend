import React from "react";
import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import YoutubeComponent from "./components/youtube/youtube";
import LoginComponent from "./components/login/login";
import AddYoutubeLink from "./components/addYoutubeLink/addYoutubeLink";

function App() {
  return (
    <div className="app">
      <Router>
        {/* {false && <Header />} */}
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/youtube">
            <YoutubeComponent />
          </Route>
          <Route path="/camera">
            <div>camera</div>
          </Route>
          <Route path="/login">
            {/* <LoginComponent /> */}
            <AddYoutubeLink />
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

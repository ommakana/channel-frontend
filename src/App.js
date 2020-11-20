import React, { Suspense } from "react";
import Header from "./components/header/header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/home/home";
import YoutubeComponent from "./components/youtube/youtube";
import LoginComponent from "./components/login/login";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import "./App.scss";

function App() {

  const AddYoutubeLinkComp = React.lazy(() =>
    import("./components/addYoutubeLink/addYoutubeLink")
  );

  return (
    <div className="app">
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/youtube" exact={true}>
            <YoutubeComponent />
          </Route>
          <Security
            issuer="https://dev-2806996.okta.com/oauth2/default"
            clientId="0oaoe889ciKp2qjIW5d5"
            redirectUri={window.location.origin + "/login/callback"}
            pkce={true}
          >
            <SecureRoute path="/admin" exact={true}>
              <Suspense fallback="loading..">
                <AddYoutubeLinkComp />
              </Suspense>
            </SecureRoute>
            <Route
              path="/login"
              exact={true}
              render={() => (
                <LoginComponent baseUrl="https://dev-2806996.okta.com" />
              )}
            />
            <Route path="/login/callback" component={LoginCallback} />
          </Security>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

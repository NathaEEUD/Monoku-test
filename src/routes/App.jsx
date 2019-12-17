import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../assets/styles/App.scss";
import Home from "../containers/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/todo" component={Home} />
      <Redirect from="/" to="/todo" />
    </Switch>
  </BrowserRouter>
);

export default App;

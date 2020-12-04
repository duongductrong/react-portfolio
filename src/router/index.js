import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../views/About/About";
import Home from "../views/Home/Home";
import WorkPage from '../views/Work/WorkPage'

function RouterRoot() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={WorkPage} />
    </Switch>
  );
}

export default RouterRoot;

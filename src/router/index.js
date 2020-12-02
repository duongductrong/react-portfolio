import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../views/About/About";
import Home from "../views/Home/Home";

function RouterRoot() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/expertise" component={() => <div></div>} />
    </Switch>
  );
}

export default RouterRoot;

import React from "react";
import About from "./About";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import FancyRoute from "./FancyRoute";
import routes from "./routes";

function Main() {
  return (
    <main>
      <Switch>
        {routes.map((route, i) => (
          <FancyRoute key={i} {...route} />
        ))}
      </Switch>
    </main>
  );
}

export default Main;

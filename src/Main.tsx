import React from "react";
import { Switch } from "react-router-dom";
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

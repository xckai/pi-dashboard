import React from "react";
import { Switch, Route } from "react-router-dom";
import { WebContainer } from "./WebContainer";
import { AddWebAppPage } from "./AddWebAppPage";
export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={WebContainer} />
        <Route path="/addWebApp" component={AddWebAppPage} />
      </Switch>
    </main>
  );
}

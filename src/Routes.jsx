import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
    </Switch>
  )
}
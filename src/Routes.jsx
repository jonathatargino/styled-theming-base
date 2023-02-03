import React from "react";
import { Route, Switch } from "react-router-dom";


import Post from "./pages/Post";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";

export default function Routes(){
  const location = useLocation()


  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/posts/:id" component={Post} />
      <Route component={NotFound}/>
    </Switch>
  )
}
import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const Live = lazy(() => import(/* webpackChunkName: "live" */ "./pages/Live"));
const Categories = lazy(() =>
  import(/* webpackChunkName: "categories" */ "./pages/Categories")
);
const Search = lazy(() =>
  import(/* webpackChunkName: "search" */ "./pages/Search")
);
const Settings = lazy(() =>
  import(/* webpackChunkName: "settings" */ "./pages/Settings")
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/live" component={Live} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/settings" component={Settings} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;

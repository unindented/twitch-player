import React, { lazy } from "react";
import { Route, Switch } from "react-router";

const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ "@twitch-player/ui/dist/pages/Home")
);
const Live = lazy(() =>
  import(/* webpackChunkName: "live" */ "@twitch-player/ui/dist/pages/Live")
);
const Categories = lazy(() =>
  import(/* webpackChunkName: "categories" */ "@twitch-player/ui/dist/pages/Categories")
);
const Search = lazy(() =>
  import(/* webpackChunkName: "search" */ "@twitch-player/ui/dist/pages/Search")
);
const Settings = lazy(() =>
  import(/* webpackChunkName: "settings" */ "@twitch-player/ui/dist/pages/Settings")
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/live" component={Live} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/settings" component={Settings} />
  </Switch>
);

export default Routes;

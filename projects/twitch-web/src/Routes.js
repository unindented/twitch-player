import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router";

const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ "@twitch-player/ui/dist/pages/Home")
);
const Channels = lazy(() =>
  import(/* webpackChunkName: "channels" */ "@twitch-player/ui/dist/pages/Channels")
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

const Null = () => null;

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/channels" component={Channels} />
    <Route exact path="/channels/:id" component={Null} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/categories/:id" component={Null} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/settings" component={Settings} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;

import { storiesOf } from "@storybook/react";
import React from "react";
import GameList from ".";

const {
  data: {
    games: { edges: topGames },
  },
} = require("@twitch-player/data/fixtures/topGames.json");
const topGamesList = topGames.map(({ node }) => node);

storiesOf("Components|GameList", module)
  .add("top games", () => <GameList list={topGamesList} />)
  .add("games with error", () => (
    <GameList list={Object.assign([], topGamesList, { 2: { key: "ERROR" } })} />
  ));

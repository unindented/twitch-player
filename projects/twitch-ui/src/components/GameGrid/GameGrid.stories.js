import { storiesOf } from "@storybook/react";
import React from "react";
import GameGrid from ".";

const {
  data: {
    games: { edges: topGames },
  },
} = require("@twitch-player/data/fixtures/topGames.json");
const games = topGames.map(({ node }) => node);

storiesOf("Components|GameGrid", module).add("default", () => (
  <GameGrid list={games} />
));

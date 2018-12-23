import { storiesOf } from "@storybook/react";
import React from "react";
import GameItem from ".";

const { data } = require("@twitch-player/data/fixtures/topGames.json");
const [{ node: game }] = data.games.edges;

storiesOf("Components|GameItem", module)
  .add("default", () => <GameItem item={game} />)
  .add("with error", () => <GameItem item={null} />);

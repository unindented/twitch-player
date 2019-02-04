import { storiesOf } from "@storybook/react";
import React from "react";
import GameItem from ".";

const { data } = require("@twitch-player/data/fixtures/topGames.json");
const [{ node: game }] = data.games.edges;

storiesOf("Components|GameItem", module)
  .add("default", () => <GameItem item={game} width={188} height={250} />)
  .add("with error", () => <GameItem item={null} width={188} height={250} />);

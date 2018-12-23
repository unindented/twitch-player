import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import GameList from "./GameList";

const {
  data: {
    games: { edges: topGames },
  },
} = require("@twitch-player/data/fixtures/topGames.json");
const games = topGames.map(({ node }) => node);

describe("GameList", () => {
  let instance;

  beforeEach(() => {
    instance = render(<GameList list={games} />);
  });

  it("renders a list of games", () => {
    expect(instance.getByTestId("game-list")).toMatchSnapshot();
  });
});

import { fireEvent, render } from "@twitch-player/testing/dist/unit";
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

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("game-list")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("game-list")).toMatchSnapshot();
    });
  });
});
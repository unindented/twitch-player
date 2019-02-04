import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import GameGrid from "./GameGrid";

const {
  data: {
    games: { edges: topGames },
  },
} = require("@twitch-player/data/fixtures/topGames.json");
const games = topGames.map(({ node }) => node);

describe("GameGrid", () => {
  let instance;

  beforeEach(() => {
    instance = render(<GameGrid list={games} />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("game-grid")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("game-grid")).toMatchSnapshot();
    });
  });
});

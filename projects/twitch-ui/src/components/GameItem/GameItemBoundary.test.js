import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import GameItemBoundary from "./GameItemBoundary";

describe("GameItemBoundary", () => {
  let instance;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("when things are fine", () => {
    beforeEach(() => {
      const { data } = require("@twitch-player/data/fixtures/topGames.json");
      const [{ node: game }] = data.games.edges;

      instance = render(
        <GameItemBoundary item={game} width={188} height={250} />
      );
    });

    it("renders", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when an error occurs", () => {
    beforeEach(() => {
      instance = render(
        <GameItemBoundary item={null} width={188} height={250} />
      );
    });

    it("renders an error message", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

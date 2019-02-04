import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Hoverable from "../Hoverable";
import GameItem from "./GameItem";

jest.mock("../Hoverable", () => jest.fn());

const { data } = require("@twitch-player/data/fixtures/topGames.json");
const [{ node: game }] = data.games.edges;

describe("GameItem", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(false));

      instance = render(<GameItem item={game} width={188} height={250} />);
    });

    it("renders a game", () => {
      expect(instance.getByTestId("game-item")).toMatchSnapshot();
    });
  });

  describe("when hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(true));

      instance = render(<GameItem item={game} width={188} height={250} />);
    });

    it("renders a game", () => {
      expect(instance.getByTestId("game-item")).toMatchSnapshot();
    });
  });
});

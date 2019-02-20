import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import GameItemDetail from "./GameItemDetail";

describe("GameItemDetail", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      instance = render(
        <GameItemDetail name="Fortnite" viewersCount={123456} width={188} />
      );
    });

    it("renders a game item detail", () => {
      expect(instance.getByTestId("game-item-detail")).toMatchSnapshot();
    });
  });

  describe("when hovering", () => {
    beforeEach(() => {
      instance = render(
        <GameItemDetail
          name="Fortnite"
          viewersCount={123456}
          width={188}
          isHover={true}
        />
      );
    });

    it("renders a hovered game item detail", () => {
      expect(instance.getByTestId("game-item-detail")).toMatchSnapshot();
    });
  });
});

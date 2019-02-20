import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import GameItemImage from "./GameItemImage";

describe("GameItemImage", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <GameItemImage
        url="games/Fortnite-376x500.jpg"
        name="Fortnite"
        width={188}
        height={250}
      />
    );
  });

  it("renders a game item image", () => {
    expect(instance.getByTestId("game-item-image")).toMatchSnapshot();
  });
});

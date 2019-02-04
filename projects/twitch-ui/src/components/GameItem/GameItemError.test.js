import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import GameItemError from "./GameItemError";

describe("GameItemError", () => {
  let instance;

  beforeEach(() => {
    instance = render(<GameItemError width={188} height={250} />);
  });

  it("renders an error placeholder", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

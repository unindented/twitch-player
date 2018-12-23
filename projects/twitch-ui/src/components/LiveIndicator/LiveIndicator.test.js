import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import LiveIndicator from "./LiveIndicator";

describe("LiveIndicator", () => {
  let instance;

  beforeEach(() => {
    instance = render(<LiveIndicator />);
  });

  it("renders a live indicator", () => {
    expect(instance.getByTestId("live-indicator")).toMatchSnapshot();
  });
});

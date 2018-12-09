import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Live from "./Live";

describe("Live", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Live />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("live-page")).toMatchSnapshot();
  });
});

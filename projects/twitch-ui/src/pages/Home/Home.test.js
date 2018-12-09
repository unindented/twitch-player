import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Home from "./Home";

describe("Home", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Home />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("home-page")).toMatchSnapshot();
  });
});

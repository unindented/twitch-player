import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Channels from "./Channels";

describe("Channels", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Channels />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("channels-page")).toMatchSnapshot();
  });
});

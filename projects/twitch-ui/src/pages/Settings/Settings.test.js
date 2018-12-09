import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Settings from "./Settings";

describe("Settings", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Settings />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("settings-page")).toMatchSnapshot();
  });
});

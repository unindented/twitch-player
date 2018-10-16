import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import NavigationIcon from "./NavigationIcon";

describe("NavigationIcon", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <NavigationIcon source="some-icon.png" accessibilityLabel="Some icon" />
    );
  });

  it("renders an icon", () => {
    expect(instance.getByTestId("navigation-icon")).toMatchSnapshot();
  });
});

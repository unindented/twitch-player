import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Text from "./Text";

describe("Text", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Text testID="text">OHAI</Text>);
  });

  it("renders the text", () => {
    expect(instance.getByTestId("text")).toMatchSnapshot();
  });
});

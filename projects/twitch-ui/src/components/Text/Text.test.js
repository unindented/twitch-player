import React from "react";
import { render } from "../../testing";
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

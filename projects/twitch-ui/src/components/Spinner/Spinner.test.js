import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Spinner />);
  });

  it("renders a spinner", () => {
    expect(instance.getByTestId("spinner")).toMatchSnapshot();
  });
});

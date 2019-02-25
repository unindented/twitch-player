import React from "react";
import { render } from "../../testing";
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

import React from "react";
import { render } from "../../testing";
import Picker from "./Picker";

describe("Picker", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Picker values={{ foo: "Foo", bar: "Bar" }} testID="picker" />
    );
  });

  it("renders a picker with the specified values", () => {
    expect(instance.getByTestId("picker")).toMatchSnapshot();
  });
});

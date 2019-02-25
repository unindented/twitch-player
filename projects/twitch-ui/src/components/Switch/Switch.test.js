import React from "react";
import { render } from "../../testing";
import Switch from "./Switch";

describe("Switch", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Switch values={{ foo: "Foo", bar: "Bar" }} testID="picker" />
    );
  });

  it("renders a switch", () => {
    expect(instance.getByTestId("picker")).toMatchSnapshot();
  });
});

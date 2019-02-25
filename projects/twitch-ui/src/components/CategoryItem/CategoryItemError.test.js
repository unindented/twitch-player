import React from "react";
import { render } from "../../testing";
import CategoryItemError from "./CategoryItemError";

describe("CategoryItemError", () => {
  let instance;

  beforeEach(() => {
    instance = render(<CategoryItemError width={188} height={250} />);
  });

  it("renders an error placeholder", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

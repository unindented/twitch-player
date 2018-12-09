import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Categories from "./Categories";

describe("Categories", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Categories />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("categories-page")).toMatchSnapshot();
  });
});

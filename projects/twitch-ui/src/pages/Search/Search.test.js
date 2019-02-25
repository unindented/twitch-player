import React from "react";
import { render } from "../../testing";
import Search from "./Search";

describe("Search", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Search />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("search-page")).toMatchSnapshot();
  });
});

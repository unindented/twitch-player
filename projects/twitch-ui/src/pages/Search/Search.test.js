import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
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

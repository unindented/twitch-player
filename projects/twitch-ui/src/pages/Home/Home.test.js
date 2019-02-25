import React from "react";
import { render } from "../../testing";
import Home from "./Home";

jest.mock("../../components/FeaturedChannels", () => "mock-featured-channels");
jest.mock("../../components/TopCategories", () => "mock-top-categories");
jest.mock("../../components/TopChannels", () => "mock-top-channels");

describe("Home", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Home />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("home-page")).toMatchSnapshot();
  });
});

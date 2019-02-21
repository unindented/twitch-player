import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import Categories from "./Categories";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topCategories = require("@twitch-player/data/fixtures/topCategories.json");

describe("Categories", () => {
  let instance;

  beforeEach(() => {
    useQuery.mockImplementationOnce(() => topCategories);

    instance = render(<Categories />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("categories-page")).toMatchSnapshot();
  });
});

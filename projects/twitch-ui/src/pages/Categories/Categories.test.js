import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import Categories from "./Categories";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topGames = require("@twitch-player/data/fixtures/topGames.json");

describe("Categories", () => {
  let instance;

  beforeEach(() => {
    useQuery.mockImplementationOnce(() => topGames);

    instance = render(<Categories />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("categories-page")).toMatchSnapshot();
  });
});

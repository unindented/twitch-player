import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import Home from "./Home";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const featuredChannels = require("@twitch-player/data/fixtures/featuredChannels.json");
const topCategories = require("@twitch-player/data/fixtures/topCategories.json");
const topChannels = require("@twitch-player/data/fixtures/topChannels.json");

describe("Home", () => {
  let instance;

  beforeEach(() => {
    useQuery.mockImplementationOnce(() => featuredChannels);
    useQuery.mockImplementationOnce(() => topCategories);
    useQuery.mockImplementationOnce(() => topChannels);
    useQuery.mockImplementationOnce(() => topChannels);
    useQuery.mockImplementationOnce(() => topChannels);

    instance = render(<Home />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("home-page")).toMatchSnapshot();
  });
});

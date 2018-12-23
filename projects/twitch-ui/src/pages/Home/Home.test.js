import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import Home from "./Home";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const featuredStreams = require("@twitch-player/data/fixtures/featuredStreams.json");
const topGames = require("@twitch-player/data/fixtures/topGames.json");
const topStreams = require("@twitch-player/data/fixtures/topStreams.json");

describe("Home", () => {
  let instance;

  beforeEach(() => {
    useQuery.mockImplementationOnce(() => featuredStreams);
    useQuery.mockImplementationOnce(() => topGames);
    useQuery.mockImplementationOnce(() => topStreams);
    useQuery.mockImplementationOnce(() => topStreams);
    useQuery.mockImplementationOnce(() => topStreams);

    instance = render(<Home />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("home-page")).toMatchSnapshot();
  });
});

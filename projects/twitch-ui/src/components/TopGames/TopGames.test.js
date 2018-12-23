import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import TopGames from "./TopGames";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topGames = require("@twitch-player/data/fixtures/topGames.json");

describe("TopGames", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topGames);

      instance = render(<TopGames />);
    });

    it("renders the list of top categories", () => {
      expect(instance.getByTestId("top-categories")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Top categories failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<TopGames />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import FeaturedStreams from "./FeaturedStreams";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const featuredStreams = require("@twitch-player/data/fixtures/featuredStreams.json");

describe("FeaturedStreams", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => featuredStreams);

      instance = render(<FeaturedStreams />);
    });

    it("renders the list of featured streams", () => {
      expect(instance.getByTestId("featured-streams")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Featured streams failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<FeaturedStreams />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

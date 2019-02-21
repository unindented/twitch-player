import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import FeaturedChannels from "./FeaturedChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const featuredChannels = require("@twitch-player/data/fixtures/featuredChannels.json");

describe("FeaturedChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => featuredChannels);

      instance = render(<FeaturedChannels />);
    });

    it("renders the list of featured streams", () => {
      expect(instance.getByTestId("featured-channels")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Featured streams failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<FeaturedChannels />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

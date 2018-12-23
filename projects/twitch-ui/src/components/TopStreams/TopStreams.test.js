import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import TopStreams from "./TopStreams";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topStreams = require("@twitch-player/data/fixtures/topStreams.json");

describe("TopStreams", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topStreams);

      instance = render(<TopStreams />);
    });

    it("renders the list of top streams", () => {
      expect(instance.getByTestId("top-streams")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Top streams failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<TopStreams />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

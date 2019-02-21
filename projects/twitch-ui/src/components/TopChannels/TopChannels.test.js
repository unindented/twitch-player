import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import TopChannels from "./TopChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topChannels = require("@twitch-player/data/fixtures/topChannels.json");

describe("TopChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topChannels);

      instance = render(<TopChannels />);
    });

    it("renders the list of top streams", () => {
      expect(instance.getByTestId("top-channels")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Top streams failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<TopChannels />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

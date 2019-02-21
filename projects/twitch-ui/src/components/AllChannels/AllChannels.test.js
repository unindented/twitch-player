import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import AllChannels from "./AllChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topChannels = require("@twitch-player/data/fixtures/topChannels.json");

describe("AllChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topChannels);

      instance = render(<AllChannels />);
    });

    it("renders the list of all channels", () => {
      expect(instance.getByTestId("all-channels")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "All channels failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<AllChannels />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

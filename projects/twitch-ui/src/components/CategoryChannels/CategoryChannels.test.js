import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import CategoryChannels from "./CategoryChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const categoryChannels = require("@twitch-player/data/fixtures/categoryChannels.json");

describe("CategoryChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => categoryChannels);

      instance = render(<CategoryChannels name="Fortnite" />);
    });

    it("renders the list of category channels", () => {
      expect(instance.getByTestId("category-channels")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Category channels failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<CategoryChannels name="Fortnite" />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import TopCategories from "./TopCategories";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topCategories = require("@twitch-player/data/fixtures/topCategories.json");

describe("TopCategories", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topCategories);

      instance = render(<TopCategories />);
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

      instance = render(<TopCategories />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

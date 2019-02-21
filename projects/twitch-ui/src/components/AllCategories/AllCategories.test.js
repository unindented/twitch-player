import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import AllCategories from "./AllCategories";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topCategories = require("@twitch-player/data/fixtures/topCategories.json");

describe("AllCategories", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topCategories);

      instance = render(<AllCategories />);
    });

    it("renders the list of all categories", () => {
      expect(instance.getByTestId("all-categories")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "All categories failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<AllCategories />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

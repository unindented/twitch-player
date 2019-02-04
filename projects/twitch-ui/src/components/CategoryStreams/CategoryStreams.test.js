import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import CategoryStreams from "./CategoryStreams";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const categoryStreams = require("@twitch-player/data/fixtures/categoryStreams.json");

describe("CategoryStreams", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => categoryStreams);

      instance = render(<CategoryStreams name="Fortnite" />);
    });

    it("renders the list of category streams", () => {
      expect(instance.getByTestId("category-streams")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Category streams failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(<CategoryStreams name="Fortnite" />);
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

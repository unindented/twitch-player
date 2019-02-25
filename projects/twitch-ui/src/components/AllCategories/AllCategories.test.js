import React from "react";
import { useQuery } from "react-apollo-hooks";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import AllCategories from "./AllCategories";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));
jest.mock("../CategoryGrid", () => "mock-category-grid");

const topCategories = require("@twitch-player/data/fixtures/topCategories.json");

describe("AllCategories", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topCategories);

      instance = render(
        <Main>
          <AllCategories heading="Categories" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders the list of all categories", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "All categories failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(
        <Main>
          <AllCategories heading="Categories" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

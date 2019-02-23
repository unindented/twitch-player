import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Highlightable from "../Highlightable";
import CategoryItem from "./CategoryItem";

jest.mock("../Highlightable", () => jest.fn());

const { data } = require("@twitch-player/data/fixtures/topCategories.json");
const [{ node: category }] = data.categories.edges;

describe("CategoryItem", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      Highlightable.mockImplementation(({ children }) => children(false));

      instance = render(
        <CategoryItem item={category} width={188} height={250} />
      );
    });

    it("renders a category", () => {
      expect(instance.getByTestId("category-item")).toMatchSnapshot();
    });
  });

  describe("when hovering", () => {
    beforeEach(() => {
      Highlightable.mockImplementation(({ children }) => children(true));

      instance = render(
        <CategoryItem item={category} width={188} height={250} />
      );
    });

    it("renders a category", () => {
      expect(instance.getByTestId("category-item")).toMatchSnapshot();
    });
  });
});

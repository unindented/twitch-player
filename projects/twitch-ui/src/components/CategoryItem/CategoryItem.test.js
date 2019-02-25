import React from "react";
import { render } from "../../testing";
import Highlightable from "../Highlightable";
import CategoryItem from "./CategoryItem";

jest.mock("../Highlightable", () => jest.fn());
jest.mock("./CategoryItemDetail", () => "mock-category-item-detail");
jest.mock("./CategoryItemImage", () => "mock-category-item-image");

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

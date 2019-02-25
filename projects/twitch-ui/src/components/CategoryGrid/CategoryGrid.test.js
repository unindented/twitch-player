import React from "react";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import CategoryGrid from "./CategoryGrid";

jest.mock("../CategoryItem", () => "mock-category-item");

const {
  data: {
    categories: { edges: topCategories },
  },
} = require("@twitch-player/data/fixtures/topCategories.json");
const categories = topCategories.map(({ node }) => node);

describe("CategoryGrid", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Main>
        <CategoryGrid list={categories} />
      </Main>
    );
  });

  it("renders nothing until layout", () => {
    expect(instance.queryByTestId("category-grid")).toBeNull();
  });

  describe("after layout", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders its elements", () => {
      expect(instance.getByTestId("category-grid")).toMatchSnapshot();
    });
  });
});

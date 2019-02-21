import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import CategoryList from "./CategoryList";

const {
  data: {
    categories: { edges: topCategories },
  },
} = require("@twitch-player/data/fixtures/topCategories.json");
const categories = topCategories.map(({ node }) => node);

describe("CategoryList", () => {
  let instance;

  beforeEach(() => {
    instance = render(<CategoryList list={categories} />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("category-list")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("category-list")).toMatchSnapshot();
    });
  });
});

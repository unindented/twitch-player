import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import CategoryGrid from "./CategoryGrid";

const {
  data: {
    categories: { edges: topCategories },
  },
} = require("@twitch-player/data/fixtures/topCategories.json");
const categories = topCategories.map(({ node }) => node);

describe("CategoryGrid", () => {
  let instance;

  beforeEach(() => {
    instance = render(<CategoryGrid list={categories} />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("category-grid")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("category-grid")).toMatchSnapshot();
    });
  });
});

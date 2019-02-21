import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import CategoryItemBoundary from "./CategoryItemBoundary";

describe("CategoryItemBoundary", () => {
  let instance;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("when things are fine", () => {
    beforeEach(() => {
      const {
        data,
      } = require("@twitch-player/data/fixtures/topCategories.json");
      const [{ node: category }] = data.categories.edges;

      instance = render(
        <CategoryItemBoundary item={category} width={188} height={250} />
      );
    });

    it("renders", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when an error occurs", () => {
    beforeEach(() => {
      instance = render(
        <CategoryItemBoundary item={null} width={188} height={250} />
      );
    });

    it("renders an error message", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

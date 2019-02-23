import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import CategoryItemDetail from "./CategoryItemDetail";

describe("CategoryItemDetail", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      instance = render(
        <CategoryItemDetail name="Fortnite" viewersCount={123456} width={188} />
      );
    });

    it("renders a category item detail", () => {
      expect(instance.getByTestId("category-item-detail")).toMatchSnapshot();
    });
  });

  describe("when hovering", () => {
    beforeEach(() => {
      instance = render(
        <CategoryItemDetail
          name="Fortnite"
          viewersCount={123456}
          width={188}
          isHighlighted={true}
        />
      );
    });

    it("renders a hovered category item detail", () => {
      expect(instance.getByTestId("category-item-detail")).toMatchSnapshot();
    });
  });
});

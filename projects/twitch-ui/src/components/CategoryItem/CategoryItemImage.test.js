import React from "react";
import { render } from "../../testing";
import CategoryItemImage from "./CategoryItemImage";

describe("CategoryItemImage", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <CategoryItemImage
        url="categories/Fortnite-376x500.jpg"
        name="Fortnite"
        width={188}
        height={250}
      />
    );
  });

  it("renders a category item image", () => {
    expect(instance.getByTestId("category-item-image")).toMatchSnapshot();
  });
});

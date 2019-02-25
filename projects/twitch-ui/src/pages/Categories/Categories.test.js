import React from "react";
import { render } from "../../testing";
import Categories from "./Categories";

jest.mock("../../components/AllCategories", () => "mock-all-categories");

describe("Categories", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Categories />);
  });

  it("renders the page", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

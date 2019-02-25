import React from "react";
import { render } from "../../testing";
import Category from "./Category";

jest.mock("../../components/CategoryChannels", () => "mock-category-channels");

describe("Category", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Category match={{ params: { name: "Fortnite" } }} />);
  });

  it("renders the page", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

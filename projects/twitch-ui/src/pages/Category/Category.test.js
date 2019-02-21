import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import Category from "./Category";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const categoryChannels = require("@twitch-player/data/fixtures/categoryChannels.json");

describe("Category", () => {
  let instance;

  beforeEach(() => {
    useQuery.mockImplementationOnce(() => categoryChannels);

    instance = render(<Category match={{ params: { name: "Fortnite" } }} />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("category-page")).toMatchSnapshot();
  });
});

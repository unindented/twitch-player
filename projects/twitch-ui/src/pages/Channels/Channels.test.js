import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import Channels from "./Channels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));

const topChannels = require("@twitch-player/data/fixtures/topChannels.json");

describe("Channels", () => {
  let instance;

  beforeEach(() => {
    useQuery.mockImplementationOnce(() => topChannels);

    instance = render(<Channels />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("channels-page")).toMatchSnapshot();
  });
});

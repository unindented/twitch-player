import React from "react";
import { useQuery } from "react-apollo-hooks";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import FeaturedChannels from "./FeaturedChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));
jest.mock("../ChannelList", () => "mock-channel-list");

const featuredChannels = require("@twitch-player/data/fixtures/featuredChannels.json");

describe("FeaturedChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => featuredChannels);

      instance = render(
        <Main>
          <FeaturedChannels heading="Featured Channels" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders the list of featured streams", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Featured streams failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(
        <Main>
          <FeaturedChannels heading="Featured Channels" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

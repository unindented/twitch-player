import React from "react";
import { useQuery } from "react-apollo-hooks";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import TopChannels from "./TopChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));
jest.mock("../ChannelList", () => "mock-channel-list");

const topChannels = require("@twitch-player/data/fixtures/topChannels.json");

describe("TopChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topChannels);

      instance = render(
        <Main>
          <TopChannels heading="Top Live Channels" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders the list of top streams", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Top streams failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(
        <Main>
          <TopChannels heading="Top Live Channels" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

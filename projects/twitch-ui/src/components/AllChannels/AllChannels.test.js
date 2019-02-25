import React from "react";
import { useQuery } from "react-apollo-hooks";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import AllChannels from "./AllChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));
jest.mock("../ChannelGrid", () => "mock-channel-grid");

const topChannels = require("@twitch-player/data/fixtures/topChannels.json");

describe("AllChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => topChannels);

      instance = render(
        <Main>
          <AllChannels heading="Live Channels" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders the list of all channels", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "All channels failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(
        <Main>
          <AllChannels heading="Live Channels" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});

import React from "react";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import ChannelList from "./ChannelList";

jest.mock("../ChannelItem", () => "mock-channel-item");

const {
  data: {
    channels: { edges: topChannels },
  },
} = require("@twitch-player/data/fixtures/topChannels.json");
const channels = topChannels.map(({ node }) => node);

describe("ChannelList", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Main>
        <ChannelList list={channels} />
      </Main>
    );
  });

  it("renders nothing until layout", () => {
    expect(instance.queryByTestId("channel-list")).toBeNull();
  });

  describe("after layout", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders its elements", () => {
      expect(instance.getByTestId("channel-list")).toMatchSnapshot();
    });
  });
});

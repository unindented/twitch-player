import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import ChannelList from "./ChannelList";

const {
  data: {
    channels: { edges: topChannels },
  },
} = require("@twitch-player/data/fixtures/topChannels.json");
const channels = topChannels.map(({ node }) => node);

describe("ChannelList", () => {
  let instance;

  beforeEach(() => {
    instance = render(<ChannelList list={channels} />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("channel-list")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("channel-list")).toMatchSnapshot();
    });
  });
});

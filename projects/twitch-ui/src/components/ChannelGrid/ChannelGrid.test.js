import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import ChannelGrid from "./ChannelGrid";

const {
  data: {
    category: {
      channels: { edges: categoryChannels },
    },
  },
} = require("@twitch-player/data/fixtures/categoryChannels.json");
const channels = categoryChannels.map(({ node }) => node);

describe("ChannelGrid", () => {
  let instance;

  beforeEach(() => {
    instance = render(<ChannelGrid list={channels} />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("channel-grid")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("channel-grid")).toMatchSnapshot();
    });
  });
});

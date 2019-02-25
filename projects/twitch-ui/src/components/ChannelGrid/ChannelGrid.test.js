import React from "react";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import ChannelGrid from "./ChannelGrid";

jest.mock("../ChannelItem", () => "mock-channel-item");

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
    instance = render(
      <Main>
        <ChannelGrid list={channels} />
      </Main>
    );
  });

  it("renders nothing until layout", () => {
    expect(instance.queryByTestId("channel-grid")).toBeNull();
  });

  describe("after layout", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders its elements", () => {
      expect(instance.getByTestId("channel-grid")).toMatchSnapshot();
    });
  });
});

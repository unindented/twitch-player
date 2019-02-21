import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import ChannelItemBoundary from "./ChannelItemBoundary";

describe("ChannelItemBoundary", () => {
  let instance;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("when things are fine", () => {
    beforeEach(() => {
      const { data } = require("@twitch-player/data/fixtures/topChannels.json");
      const [{ node: channel }] = data.channels.edges;

      instance = render(
        <ChannelItemBoundary item={channel} width={400} height={225} />
      );
    });

    it("renders", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when an error occurs", () => {
    beforeEach(() => {
      instance = render(
        <ChannelItemBoundary item={null} width={400} height={225} />
      );
    });

    it("renders an error placeholder", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

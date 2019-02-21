import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Hoverable from "../Hoverable";
import ChannelItem from "./ChannelItem";

jest.mock("../Hoverable", () => jest.fn());

const { data } = require("@twitch-player/data/fixtures/topChannels.json");
const [{ node: channel }] = data.channels.edges;

describe("ChannelItem", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(false));

      instance = render(
        <ChannelItem item={channel} width={400} height={225} />
      );
    });

    it("renders a channel", () => {
      expect(instance.getByTestId("channel-item")).toMatchSnapshot();
    });
  });

  describe("when hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(true));

      instance = render(
        <ChannelItem item={channel} width={400} height={225} />
      );
    });

    it("renders a channel", () => {
      expect(instance.getByTestId("channel-item")).toMatchSnapshot();
    });
  });

  describe("when the category is null", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(true));

      instance = render(
        <ChannelItem
          item={{ ...channel, category: null }}
          width={400}
          height={225}
        />
      );
    });

    it("renders a channel without category name", () => {
      expect(instance.getByTestId("channel-item")).toMatchSnapshot();
    });
  });
});

import React from "react";
import { render } from "../../testing";
import Highlightable from "../Highlightable";
import ChannelItem from "./ChannelItem";

jest.mock("../Highlightable", () => jest.fn());
jest.mock("./ChannelItemDetail", () => "mock-channel-item-detail");
jest.mock("./ChannelItemImage", () => "mock-channel-item-image");

const { data } = require("@twitch-player/data/fixtures/topChannels.json");
const [{ node: channel }] = data.channels.edges;

describe("ChannelItem", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      Highlightable.mockImplementation(({ children }) => children(false));

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
      Highlightable.mockImplementation(({ children }) => children(true));

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
      Highlightable.mockImplementation(({ children }) => children(true));

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

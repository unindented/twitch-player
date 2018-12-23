import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Hoverable from "../Hoverable";
import StreamItem from "./StreamItem";

jest.mock("../Hoverable", () => jest.fn());

const { data } = require("@twitch-player/data/fixtures/topStreams.json");
const [{ node: stream }] = data.streams.edges;

describe("StreamItem", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(false));

      instance = render(<StreamItem item={stream} />);
    });

    it("renders a stream", () => {
      expect(instance.getByTestId("stream-item")).toMatchSnapshot();
    });
  });

  describe("when hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(true));

      instance = render(<StreamItem item={stream} />);
    });

    it("renders a stream", () => {
      expect(instance.getByTestId("stream-item")).toMatchSnapshot();
    });
  });

  describe("when the game is null", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(true));

      instance = render(<StreamItem item={{ ...stream, game: null }} />);
    });

    it("renders a stream without game name", () => {
      expect(instance.getByTestId("stream-item")).toMatchSnapshot();
    });
  });
});

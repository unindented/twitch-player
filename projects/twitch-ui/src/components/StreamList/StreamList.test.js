import { fireResizeEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamList from "./StreamList";

const {
  data: {
    streams: { edges: topStreams },
  },
} = require("@twitch-player/data/fixtures/topStreams.json");
const streams = topStreams.map(({ node }) => node);

describe("StreamList", () => {
  let instance;

  beforeEach(() => {
    instance = render(<StreamList list={streams} />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("stream-list")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireResizeEvent(window, { width: 480, height: 640 });
      jest.runAllTimers();
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("stream-list")).toMatchSnapshot();
    });
  });
});

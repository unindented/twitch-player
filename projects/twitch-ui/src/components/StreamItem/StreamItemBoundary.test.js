import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamItemBoundary from "./StreamItemBoundary";

describe("StreamItemBoundary", () => {
  let instance;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("when things are fine", () => {
    beforeEach(() => {
      const { data } = require("@twitch-player/data/fixtures/topStreams.json");
      const [{ node: stream }] = data.streams.edges;

      instance = render(
        <StreamItemBoundary item={stream} width={400} height={225} />
      );
    });

    it("renders", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when an error occurs", () => {
    beforeEach(() => {
      instance = render(
        <StreamItemBoundary item={null} width={400} height={225} />
      );
    });

    it("renders an error placeholder", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

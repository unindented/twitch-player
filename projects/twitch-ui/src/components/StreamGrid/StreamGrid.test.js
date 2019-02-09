import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamGrid from "./StreamGrid";

const {
  data: {
    game: {
      streams: { edges: categoryStreams },
    },
  },
} = require("@twitch-player/data/fixtures/categoryStreams.json");
const streams = categoryStreams.map(({ node }) => node);

describe("StreamGrid", () => {
  let instance;

  beforeEach(() => {
    instance = render(<StreamGrid list={streams} />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("stream-grid")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("stream-grid")).toMatchSnapshot();
    });
  });
});

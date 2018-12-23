import { render } from "@twitch-player/testing/dist/unit";
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

  it("renders a list of streams", () => {
    expect(instance.getByTestId("stream-list")).toMatchSnapshot();
  });
});

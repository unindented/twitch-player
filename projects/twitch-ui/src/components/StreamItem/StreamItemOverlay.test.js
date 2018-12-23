import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamItemOverlay from "./StreamItemOverlay";

describe("StreamItemOverlay", () => {
  let instance;

  beforeEach(() => {
    instance = render(<StreamItemOverlay viewersCount={123456} />);
  });

  it("renders a stream", () => {
    expect(instance.getByTestId("stream-item-overlay")).toMatchSnapshot();
  });
});

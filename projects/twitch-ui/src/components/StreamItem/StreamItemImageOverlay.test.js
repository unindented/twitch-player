import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamItemImageOverlay from "./StreamItemImageOverlay";

describe("StreamItemImageOverlay", () => {
  let instance;

  beforeEach(() => {
    instance = render(<StreamItemImageOverlay viewersCount={123456} />);
  });

  it("renders the overlay for a stream item image", () => {
    expect(instance.getByTestId("stream-item-image-overlay")).toMatchSnapshot();
  });
});

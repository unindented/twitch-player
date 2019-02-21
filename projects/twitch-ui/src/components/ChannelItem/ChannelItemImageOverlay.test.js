import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import ChannelItemImageOverlay from "./ChannelItemImageOverlay";

describe("ChannelItemImageOverlay", () => {
  let instance;

  beforeEach(() => {
    instance = render(<ChannelItemImageOverlay viewersCount={123456} />);
  });

  it("renders the overlay for a channel item image", () => {
    expect(
      instance.getByTestId("channel-item-image-overlay")
    ).toMatchSnapshot();
  });
});

import React from "react";
import { render } from "../../testing";
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

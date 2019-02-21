import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import ChannelItemImage from "./ChannelItemImage";

describe("ChannelItemImage", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <ChannelItemImage
        url="channels/live_user_ninja-800x450.jpg"
        title="We Gaming <3 "
        viewersCount={123456}
        width={400}
        height={225}
      />
    );
  });

  it("renders a channel item image", () => {
    expect(instance.getByTestId("channel-item-image")).toMatchSnapshot();
  });
});

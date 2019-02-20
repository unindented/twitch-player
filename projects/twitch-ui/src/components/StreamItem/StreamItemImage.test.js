import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamItemImage from "./StreamItemImage";

describe("StreamItemImage", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <StreamItemImage
        url="streams/live_user_ninja-800x450.jpg"
        title="We Gaming <3 "
        viewersCount={123456}
        width={400}
        height={225}
      />
    );
  });

  it("renders a stream item image", () => {
    expect(instance.getByTestId("stream-item-image")).toMatchSnapshot();
  });
});

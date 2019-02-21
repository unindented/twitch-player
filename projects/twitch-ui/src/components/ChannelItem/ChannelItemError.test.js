import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import ChannelItemError from "./ChannelItemError";

describe("ChannelItemError", () => {
  let instance;

  beforeEach(() => {
    instance = render(<ChannelItemError width={400} height={225} />);
  });

  it("renders an error placeholder", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

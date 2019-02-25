import React from "react";
import { render } from "../../testing";
import ChannelPlayerFrame from "./ChannelPlayerFrame";

describe("ChannelPlayerFrame", () => {
  let instance;

  beforeEach(() => {
    instance = render(<ChannelPlayerFrame name="twitchpresents" />);
  });

  it("renders a channel player", () => {
    expect(instance.getByTestId("channel-player")).toMatchSnapshot();
  });
});

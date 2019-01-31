import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamPlayerFrame from "./StreamPlayerFrame";

describe("StreamPlayerFrame", () => {
  let instance;

  beforeEach(() => {
    instance = render(<StreamPlayerFrame name="twitchpresents" />);
  });

  it("renders a stream player", () => {
    expect(instance.getByTestId("stream-player")).toMatchSnapshot();
  });
});

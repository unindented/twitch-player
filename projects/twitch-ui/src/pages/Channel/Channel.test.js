import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Channel from "./Channel";

describe("Channel", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Channel match={{ params: { name: "twitchpresents" } }} />
    );
  });

  it("renders the page", () => {
    expect(instance.getByTestId("channel-page")).toMatchSnapshot();
  });
});

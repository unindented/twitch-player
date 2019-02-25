import React from "react";
import { render } from "../../testing";
import Channel from "./Channel";

jest.mock("../../components/ChannelPlayerFrame", () => "mock-channel-player");

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

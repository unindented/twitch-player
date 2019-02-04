import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamItemError from "./StreamItemError";

describe("StreamItemError", () => {
  let instance;

  beforeEach(() => {
    instance = render(<StreamItemError width={400} height={225} />);
  });

  it("renders an error placeholder", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

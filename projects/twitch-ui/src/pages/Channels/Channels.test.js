import React from "react";
import { render } from "../../testing";
import Channels from "./Channels";

jest.mock("../../components/AllChannels", () => "mock-all-channels");

describe("Channels", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Channels />);
  });

  it("renders the page", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

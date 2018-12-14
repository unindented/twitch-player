import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import LanguageMonitor from "./LanguageMonitor";

describe("LanguageMonitor", () => {
  let instance;

  beforeEach(() => {
    instance = render(<LanguageMonitor />);
  });

  it("renders nothing", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });

  it("sets the `lang` attribute of the `<html>` tag", () => {
    expect(document.documentElement.getAttribute("lang")).toBe("en-US");
  });

  it("sets the `dir` attribute of the `<html>` tag", () => {
    expect(document.documentElement.getAttribute("dir")).toBe("ltr");
  });
});

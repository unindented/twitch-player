import React from "react";
import { render } from "../../testing";
import Settings from "./Settings";

jest.mock("../../components/DebugSwitch", () => "mock-debug-switch");
jest.mock("../../components/LanguagePicker", () => "mock-language-picker");
jest.mock("../../components/ThemeSwitch", () => "mock-theme-switch");

describe("Settings", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Settings />);
  });

  it("renders the page", () => {
    expect(instance.getByTestId("settings-page")).toMatchSnapshot();
  });
});

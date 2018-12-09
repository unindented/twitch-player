import { render, fireResizeEvent } from "@twitch-player/testing/dist/unit";
import React from "react";
import Navigation from "./Navigation";

jest.mock("./NavigationIcon", () => "mock-navigation-icon");

describe("Navigation", () => {
  let instance;

  beforeEach(() => {
    instance = render(<Navigation />);
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("navigation")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireResizeEvent(window, { width: 280, height: 500 });
      jest.runAllTimers();
    });

    it("renders with a horizontal layout", () => {
      expect(instance.getByTestId("navigation")).toMatchSnapshot();
    });
  });

  describe("with wide parent", () => {
    beforeEach(() => {
      fireResizeEvent(window, { width: 500, height: 280 });
      jest.runAllTimers();
    });

    it("renders with a vertical layout", () => {
      expect(instance.getByTestId("navigation")).toMatchSnapshot();
    });
  });
});

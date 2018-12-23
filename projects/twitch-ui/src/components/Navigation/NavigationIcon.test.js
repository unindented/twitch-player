import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Hoverable from "../Hoverable";
import NavigationIcon from "./NavigationIcon";

jest.mock("../Hoverable", () => jest.fn());

describe("NavigationIcon", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(false));

      instance = render(
        <NavigationIcon
          href="/"
          source="some-icon.png"
          accessibilityLabel="Some icon"
        />
      );
    });

    it("renders an icon", () => {
      expect(instance.getByTestId("navigation-icon")).toMatchSnapshot();
    });
  });

  describe("when hovering", () => {
    beforeEach(() => {
      Hoverable.mockImplementation(({ children }) => children(true));

      instance = render(
        <NavigationIcon
          href="/"
          source="some-icon.png"
          accessibilityLabel="Some icon"
        />
      );
    });

    it("renders an icon", () => {
      expect(instance.getByTestId("navigation-icon")).toMatchSnapshot();
    });
  });
});

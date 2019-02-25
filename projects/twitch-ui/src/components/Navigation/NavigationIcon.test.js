import React from "react";
import { render } from "../../testing";
import Highlightable from "../Highlightable";
import NavigationIcon from "./NavigationIcon";

jest.mock("../Highlightable", () => jest.fn());

describe("NavigationIcon", () => {
  let instance;

  describe("when not hovering", () => {
    beforeEach(() => {
      Highlightable.mockImplementation(({ children }) => children(false));

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
      Highlightable.mockImplementation(({ children }) => children(true));

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

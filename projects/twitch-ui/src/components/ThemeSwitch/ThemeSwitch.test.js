import { useTheme } from "@twitch-player/themes/dist/hooks";
import React from "react";
import { fireEvent, render } from "../../testing";
import Text from "../Text";
import ThemeSwitch from "./ThemeSwitch";

const SomeComponent = () => {
  const [{ colors }] = useTheme();

  return <Text testID="some-component">{colors.bodyText}</Text>;
};

describe("ThemeSwitch", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <>
        <ThemeSwitch />
        <SomeComponent />
      </>
    );
  });

  it("renders a theme switch", () => {
    expect(instance.getByTestId("theme-switch")).toMatchSnapshot();
  });

  it("renders with the default theme", () => {
    expect(instance.getByTestId("some-component")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    let checkbox;

    beforeEach(() => {
      checkbox = instance.getByLabelText("Theme", { selector: "input" });
      fireEvent.click(checkbox);
    });

    it("re-renders with the new theme", () => {
      expect(instance.getByTestId("some-component")).toMatchSnapshot();
    });

    describe("when clicked again", () => {
      beforeEach(() => {
        fireEvent.click(checkbox);
      });

      it("re-renders with the default theme", () => {
        expect(instance.getByTestId("some-component")).toMatchSnapshot();
      });
    });
  });
});

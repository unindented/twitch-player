import React from "react";
import { fireEvent, render } from "../../testing";
import { useDebug } from "../../hooks";
import Text from "../Text";
import DebugSwitch from "./DebugSwitch";

const SomeComponent = () => {
  const [debug] = useDebug();

  return <Text testID="some-component">{`${debug}`}</Text>;
};

describe("DebugSwitch", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <>
        <DebugSwitch />
        <SomeComponent />
      </>
    );
  });

  it("renders a debug switch", () => {
    expect(instance.getByTestId("debug-switch")).toMatchSnapshot();
  });

  it("renders without debug mode", () => {
    expect(instance.getByTestId("some-component")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    let checkbox;

    beforeEach(() => {
      checkbox = instance.getByLabelText("Debug mode", {
        selector: "input",
      });
      fireEvent.click(checkbox);
    });

    it("re-renders with debug mode", () => {
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

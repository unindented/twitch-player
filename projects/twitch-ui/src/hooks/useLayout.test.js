import { render, fireResizeEvent } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text, View } from "react-native";
import { useLayout } from ".";

const layoutQuery = {
  layout1: {
    minWidth: 480,
    maxHeight: 320,
  },
  layout2: {
    maxWidth: 320,
    minHeight: 480,
  },
};

const SomeComponent = () => {
  const [layout, updateLayout] = useLayout(layoutQuery);

  return (
    <View onLayout={updateLayout}>
      <Text>{layout}</Text>
    </View>
  );
};

describe("useLayout", () => {
  let instance;

  beforeEach(() => {
    instance = render(<SomeComponent />);
  });

  it("renders without layout", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });

  describe("when the layout changes width", () => {
    beforeEach(() => {
      fireResizeEvent(window, { width: 480, height: 320 });
      jest.runAllTimers();
    });

    it("renders with the right layout", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when the layout changes height", () => {
    beforeEach(() => {
      fireResizeEvent(window, { width: 320, height: 480 });
      jest.runAllTimers();
    });

    it("renders with the right layout", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

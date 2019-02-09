import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text, View } from "react-native";
import { useResponsiveLayout } from ".";

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
  const [layout, updateLayout] = useResponsiveLayout(layoutQuery);

  return (
    <View onLayout={updateLayout}>
      <Text>{layout}</Text>
    </View>
  );
};

describe("useResponsiveLayout", () => {
  let instance;

  beforeEach(() => {
    instance = render(<SomeComponent />);
  });

  it("renders without layout", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });

  describe("when the layout changes width", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 320 } });
    });

    it("renders with the right layout", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when the layout changes height", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 320, height: 480 } });
    });

    it("renders with the right layout", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

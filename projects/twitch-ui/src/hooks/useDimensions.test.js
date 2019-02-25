import React from "react";
import { Text, View } from "react-native";
import { fireEvent, render } from "../testing";
import { DimensionsProvider } from "../context";
import { useDimensions } from ".";

const SomeComponent = () => {
  const [dimensions, updateDimensions] = useDimensions("foobar");

  return (
    <View onLayout={updateDimensions}>
      <Text>{dimensions && `${dimensions.width}x${dimensions.height}`}</Text>
    </View>
  );
};

describe("useDimensions", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <DimensionsProvider>
        <SomeComponent />
      </DimensionsProvider>
    );
  });

  it("renders without dimensions", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });

  describe("when the dimensions change", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with the updated dimensions", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

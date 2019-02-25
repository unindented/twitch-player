import React from "react";
import { Text } from "react-native";
import { render } from "../testing";
import { DebugProvider } from "../context";
import { useDebug } from ".";

const SomeComponent = () => {
  const [debug] = useDebug();

  return <Text>{`${debug}`}</Text>;
};

describe("useDebug", () => {
  let instance;

  describe("when not debugging", () => {
    beforeEach(() => {
      instance = render(
        <DebugProvider>
          <SomeComponent />
        </DebugProvider>
      );
    });

    it("renders without debug values", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when debugging", () => {
    beforeEach(() => {
      instance = render(
        <DebugProvider value={true}>
          <SomeComponent />
        </DebugProvider>
      );
    });

    it("renders with debug values", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

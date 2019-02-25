import React from "react";
import { Text } from "react-native";
import { fireEvent, render } from "../../testing";
import MainBoundary from "./MainBoundary";

describe("MainBoundary", () => {
  let instance;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("when things are fine", () => {
    beforeEach(() => {
      const GoodChild = () => <Text>OHAI</Text>;

      instance = render(
        <MainBoundary>
          <GoodChild />
        </MainBoundary>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders its children", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when an error occurs", () => {
    beforeEach(() => {
      const BadChild = () => {
        throw new Error("BOOM");
      };

      instance = render(
        <MainBoundary>
          <BadChild />
        </MainBoundary>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders an error message", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

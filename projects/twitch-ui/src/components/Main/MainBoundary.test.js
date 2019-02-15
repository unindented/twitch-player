import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text } from "react-native";
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
    });

    it("renders an error message", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

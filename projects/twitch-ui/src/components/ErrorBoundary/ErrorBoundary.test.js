import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text } from "react-native";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  let instance;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("when things are fine", () => {
    beforeEach(() => {
      const renderError = error => (
        <Text>{`Something went wrong: ${error.message}`}</Text>
      );
      const GoodChild = () => <Text>OHAI</Text>;

      instance = render(
        <ErrorBoundary renderError={renderError}>
          <GoodChild />
        </ErrorBoundary>
      );
    });

    it("renders its children", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when an error occurs", () => {
    beforeEach(() => {
      const renderError = error => (
        <Text>{`Something went wrong: ${error.message}`}</Text>
      );
      const BadChild = () => {
        throw new Error("BOOM");
      };

      instance = render(
        <ErrorBoundary renderError={renderError}>
          <BadChild />
        </ErrorBoundary>
      );
    });

    it("renders an error message", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

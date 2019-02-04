import { fireResizeEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text } from "react-native";
import Page from "./Page";

jest.mock("../Navigation", () => "mock-navigation");
jest.mock("../Main", () => "mock-main");

describe("Page", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Page>
        <Text>OHAI</Text>
      </Page>
    );
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("page")).toMatchSnapshot();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireResizeEvent(window, { width: 320, height: 640 });
      jest.runAllTimers();
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("page")).toMatchSnapshot();
    });
  });

  describe("with wide parent", () => {
    beforeEach(() => {
      fireResizeEvent(window, { width: 640, height: 320 });
      jest.runAllTimers();
    });

    it("renders with a wide layout", () => {
      expect(instance.getByTestId("page")).toMatchSnapshot();
    });
  });
});

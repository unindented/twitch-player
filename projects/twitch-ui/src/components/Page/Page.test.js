import React from "react";
import { Text } from "react-native";
import { fireEvent, render } from "../../testing";
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
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a narrow layout", () => {
      expect(instance.getByTestId("page")).toMatchSnapshot();
    });
  });

  describe("with wide parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 640, height: 480 } });
    });

    it("renders with a wide layout", () => {
      expect(instance.getByTestId("page")).toMatchSnapshot();
    });
  });
});

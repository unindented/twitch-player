import React from "react";
import { Text } from "react-native";
import { fireEvent, render } from "../../testing";
import Main from "./Main";

describe("Main", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Main>
        <Text>OHAI</Text>
      </Main>
    );
  });

  it("renders nothing until layout", () => {
    expect(instance.getByTestId("main")).toMatchSnapshot();
  });

  describe("after layout", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders its children", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });
});

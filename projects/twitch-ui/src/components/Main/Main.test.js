import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text } from "react-native";
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

  it("renders a main element", () => {
    expect(instance.getByTestId("main")).toMatchSnapshot();
  });
});

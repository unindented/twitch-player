import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text } from "react-native";
import { useTheme } from ".";

const SomeComponent = () => {
  const theme = useTheme();

  return <Text style={{ color: theme.colors.bodyText }}>OHAI</Text>;
};

describe("useTheme", () => {
  let instance;

  beforeEach(() => {
    instance = render(<SomeComponent />);
  });

  it("renders with the current theme", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

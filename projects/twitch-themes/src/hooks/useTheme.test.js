import { render } from "react-testing-library";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "../context";
import { useTheme } from ".";

const SomeComponent = () => {
  const [{ colors }] = useTheme();

  return <Text style={{ color: colors.bodyText }}>OHAI</Text>;
};

describe("useTheme", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <ThemeProvider>
        <SomeComponent />
      </ThemeProvider>
    );
  });

  it("renders with the current theme", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

import React, { useContext } from "react";
import { Text } from "react-native";
import { render } from "react-testing-library";
import { dark as darkTheme } from "../themes";
import { ThemeContext, ThemeProvider } from ".";

const SomeComponent = () => {
  const theme = useContext(ThemeContext);

  return <Text style={{ color: theme.colors.bodyText }}>OHAI</Text>;
};

describe("ThemeContext", () => {
  let instance;

  describe("without theme", () => {
    beforeEach(() => {
      instance = render(
        <ThemeProvider>
          <SomeComponent />
        </ThemeProvider>
      );
    });

    it("renders with the default light theme", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("with a theme", () => {
    beforeEach(() => {
      instance = render(
        <ThemeProvider theme={darkTheme}>
          <SomeComponent />
        </ThemeProvider>
      );
    });

    it("renders with that theme", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

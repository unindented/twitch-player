import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Text } from "react-native";
import { render } from "react-testing-library";
import { OverridesContext, OverridesProvider } from ".";

const SomeComponent = () => {
  const { Link } = useContext(OverridesContext);

  return <Link href="https://www.twitch.tv/">Twitch</Link>;
};

const SomeLink = ({ href, children }) => (
  <Text accessibilityRole="link" href={href}>
    {children}
  </Text>
);

SomeLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

describe("OverridesContext", () => {
  let instance;

  describe("without overrides", () => {
    beforeEach(() => {
      instance = render(
        <OverridesProvider>
          <SomeComponent />
        </OverridesProvider>
      );
    });

    it("renders with the default components", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("with overrides", () => {
    beforeEach(() => {
      instance = render(
        <OverridesProvider overrides={{ Link: SomeLink }}>
          <SomeComponent />
        </OverridesProvider>
      );
    });

    it("renders with those overrides", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

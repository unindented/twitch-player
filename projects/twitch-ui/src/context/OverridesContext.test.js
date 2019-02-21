import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Text } from "react-native";
import { render } from "react-testing-library";
import { OverridesContext, OverridesProvider } from ".";

const SomeComponent = () => {
  const { ChannelPlayer } = useContext(OverridesContext);

  return <ChannelPlayer src="https://www.twitch.tv/" />;
};

const SomeChannelPlayer = ({ src }) => <Text>{src}</Text>;

SomeChannelPlayer.propTypes = {
  src: PropTypes.string.isRequired,
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
        <OverridesProvider overrides={{ ChannelPlayer: SomeChannelPlayer }}>
          <SomeComponent />
        </OverridesProvider>
      );
    });

    it("renders with those overrides", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

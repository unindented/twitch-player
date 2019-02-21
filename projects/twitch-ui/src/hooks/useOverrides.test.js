import { render } from "@twitch-player/testing/dist/unit";
import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";
import { OverridesProvider } from "../context";
import { useOverrides } from ".";

const SomeComponent = () => {
  const { ChannelPlayer } = useOverrides();

  return <ChannelPlayer src="https://www.twitch.tv/" />;
};

const SomeChannelPlayer = ({ src }) => <Text>{src}</Text>;

SomeChannelPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

describe("useOverrides", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <OverridesProvider overrides={{ ChannelPlayer: SomeChannelPlayer }}>
        <SomeComponent />
      </OverridesProvider>
    );
  });

  it("renders with the overriden component", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

import { render } from "@twitch-player/testing/dist/unit";
import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";
import { OverridesProvider } from "../context";
import { useOverrides } from ".";

const SomeComponent = () => {
  const { StreamPlayer } = useOverrides();

  return <StreamPlayer src="https://www.twitch.tv/" />;
};

const SomeStreamPlayer = ({ src }) => <Text>{src}</Text>;

SomeStreamPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

describe("useOverrides", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <OverridesProvider overrides={{ StreamPlayer: SomeStreamPlayer }}>
        <SomeComponent />
      </OverridesProvider>
    );
  });

  it("renders with the overriden component", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

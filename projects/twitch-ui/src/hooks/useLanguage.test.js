import { render } from "@twitch-player/testing/dist/unit";
import React, { useState } from "react";
import { Text } from "react-native";
import { useLanguage } from ".";

const SomeComponent = () => {
  const [{ lng, dir }, setLanguage] = useState({ lng: null, dir: null });

  useLanguage((lng, dir) => {
    setLanguage({ lng, dir });
  });

  return (
    <Text>
      {lng} - {dir}
    </Text>
  );
};

describe("useLanguage", () => {
  let instance;

  beforeEach(() => {
    instance = render(<SomeComponent />);
  });

  it("renders", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});

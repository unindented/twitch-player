import { render, fireEvent } from "@twitch-player/testing/dist/unit";
import React, { useState } from "react";
import { Text } from "react-native";
import { useKeyboard } from ".";

const SomeComponent = () => {
  const [keyCode, setKeyCode] = useState();

  useKeyboard(keyCode => {
    setKeyCode(keyCode);
  });

  return <Text>{keyCode}</Text>;
};

describe("useKeyboard", () => {
  let instance;

  beforeEach(() => {
    instance = render(<SomeComponent />);
  });

  describe("when a key is pressed", () => {
    beforeEach(() => {
      fireEvent.keyDown(document.body, { keyCode: 65 });
    });

    it("invokes the callback", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });
});

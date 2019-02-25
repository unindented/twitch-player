import React from "react";
import { Linking } from "react-native";
import { fireEvent, render } from "../../testing";
import Text from "../Text";
import ExternalTouchableLink from "./ExternalTouchableLink";

describe("ExternalTouchableLink", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <ExternalTouchableLink href="/some-link">
        <Text>Some Link</Text>
      </ExternalTouchableLink>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("external-touchable-link")).toMatchSnapshot();
  });

  describe("when pressed", () => {
    beforeEach(() => {
      jest.spyOn(Linking, "openURL").mockImplementation(() => {});

      const link = instance.getByTestId("external-touchable-link");
      fireEvent.press(link);
    });

    it("opens the URL", () => {
      expect(Linking.openURL).toHaveBeenCalledWith("/some-link");
    });
  });
});

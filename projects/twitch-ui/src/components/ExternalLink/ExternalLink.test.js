import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Linking } from "react-native";
import ExternalLink from "./ExternalLink";

describe("ExternalLink", () => {
  let instance;

  beforeEach(() => {
    instance = render(<ExternalLink href="/some-link">Some Link</ExternalLink>);
  });

  it("renders a link", () => {
    expect(instance.getByTestId("link")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    beforeEach(() => {
      jest.spyOn(Linking, "openURL").mockImplementation(() => {});
      fireEvent.click(instance.getByTestId("link"));
    });

    it("opens the URL", () => {
      expect(Linking.openURL).toHaveBeenCalledWith("/some-link");
    });
  });
});

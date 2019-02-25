import React from "react";
import { Linking } from "react-native";
import { fireEvent, render } from "../../testing";
import ExternalTextLink from "./ExternalTextLink";

describe("ExternalTextLink", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <ExternalTextLink href="/some-link">Some Link</ExternalTextLink>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("external-text-link")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    beforeEach(() => {
      jest.spyOn(Linking, "openURL").mockImplementation(() => {});

      fireEvent.click(instance.getByTestId("external-text-link"));
    });

    it("opens the URL", () => {
      expect(Linking.openURL).toHaveBeenCalledWith("/some-link");
    });
  });
});

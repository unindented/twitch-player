import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import TextLink from "./TextLink";

describe("TextLink", () => {
  let pressSpy;
  let instance;

  beforeEach(() => {
    pressSpy = jest.fn();
    instance = render(
      <TextLink href="/some-link" onPress={pressSpy}>
        Some Link
      </TextLink>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("text-link")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    beforeEach(() => {
      fireEvent.click(instance.getByTestId("text-link"));
    });

    it("invokes the callback", () => {
      expect(pressSpy).toHaveBeenCalled();
    });
  });
});

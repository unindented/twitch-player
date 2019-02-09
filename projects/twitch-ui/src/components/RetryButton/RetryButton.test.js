import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import RetryButton from "./RetryButton";

describe("RetryButton", () => {
  let pressSpy;
  let instance;

  beforeEach(() => {
    pressSpy = jest.fn();
    instance = render(<RetryButton onPress={pressSpy} />);
  });

  it("renders a button", () => {
    expect(instance.getByTestId("retry-button")).toMatchSnapshot();
  });

  describe("when pressed", () => {
    beforeEach(() => {
      const button = instance.getByRole("button");
      fireEvent.press(button);
    });

    it("invokes the callback", () => {
      expect(pressSpy).toHaveBeenCalled();
    });
  });
});

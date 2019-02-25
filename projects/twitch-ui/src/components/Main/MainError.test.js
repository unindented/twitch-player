import React from "react";
import { fireEvent, render } from "../../testing";
import MainError from "./MainError";

describe("MainError", () => {
  let instance;

  beforeEach(() => {
    instance = render(<MainError />);
  });

  it("renders a retry button", () => {
    expect(instance.getByTestId("retry-button")).toMatchSnapshot();
  });

  describe("when pressed", () => {
    beforeEach(() => {
      jest.spyOn(window.location, "reload").mockImplementation(() => {});

      const button = instance.getByRole("button");
      fireEvent.press(button);
    });

    it("reloads the page", () => {
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});

import React from "react";
import { getI18n } from "react-i18next";
import { fireEvent, render } from "../../testing";
import LanguagePicker from "./LanguagePicker";

describe("LanguagePicker", () => {
  let instance;

  beforeEach(() => {
    instance = render(<LanguagePicker />);
  });

  it("renders a picker with all supported languages", () => {
    expect(instance.getByTestId("language-picker")).toMatchSnapshot();
  });

  describe("when changed", () => {
    beforeEach(() => {
      fireEvent.change(instance.getByTestId("language-picker"), {
        target: { value: "es" },
      });
    });

    it("changes the current language", () => {
      expect(getI18n().changeLanguage).toHaveBeenCalledWith("es");
    });
  });
});

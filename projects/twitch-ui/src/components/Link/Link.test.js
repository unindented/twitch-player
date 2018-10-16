import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import Link from "./Link";

describe("Link", () => {
  let pressSpy;
  let instance;

  beforeEach(() => {
    pressSpy = jest.fn();
    instance = render(
      <Link href="/some-link" onPress={pressSpy}>
        Some Link
      </Link>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("link")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    beforeEach(() => {
      fireEvent.click(instance.getByTestId("link"));
    });

    it("opens the URL", () => {
      expect(pressSpy).toHaveBeenCalled();
    });
  });
});

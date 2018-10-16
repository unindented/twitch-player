import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router";
import InternalLink from "./InternalLink";

describe("InternalLink", () => {
  let history;
  let instance;

  beforeEach(() => {
    history = createMemoryHistory();
    instance = render(
      <Router history={history}>
        <InternalLink href="/some-link">Some Link</InternalLink>
      </Router>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("link")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    beforeEach(() => {
      jest.spyOn(history, "push");
      fireEvent.click(instance.getByTestId("link"));
    });

    it("opens the URL", () => {
      expect(history.push).toHaveBeenCalledWith("/some-link");
    });
  });
});

import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router";
import { fireEvent, render } from "../../testing";
import InternalTextLink from "./InternalTextLink";

describe("InternalTextLink", () => {
  let history;
  let instance;

  beforeEach(() => {
    history = createMemoryHistory();
    instance = render(
      <Router history={history}>
        <InternalTextLink href="/some-link">Some Link</InternalTextLink>
      </Router>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("internal-text-link")).toMatchSnapshot();
  });

  describe("when clicked", () => {
    beforeEach(() => {
      jest.spyOn(history, "push");

      fireEvent.click(instance.getByTestId("internal-text-link"));
    });

    it("opens the URL", () => {
      expect(history.push).toHaveBeenCalledWith("/some-link");
    });
  });
});

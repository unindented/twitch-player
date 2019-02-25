import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router";
import { fireEvent, render } from "../../testing";
import Text from "../Text";
import InternalTouchableLink from "./InternalTouchableLink";

describe("InternalTouchableLink", () => {
  let history;
  let instance;

  beforeEach(() => {
    history = createMemoryHistory();
    instance = render(
      <Router history={history}>
        <InternalTouchableLink href="/some-link">
          <Text>Some Link</Text>
        </InternalTouchableLink>
      </Router>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("internal-touchable-link")).toMatchSnapshot();
  });

  describe("when pressed", () => {
    beforeEach(() => {
      jest.spyOn(history, "push");

      const link = instance.getByTestId("internal-touchable-link");
      fireEvent.press(link);
    });

    it("opens the URL", () => {
      expect(history.push).toHaveBeenCalledWith("/some-link");
    });
  });
});

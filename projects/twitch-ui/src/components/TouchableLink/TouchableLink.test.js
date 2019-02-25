import React from "react";
import { fireEvent, render } from "../../testing";
import Text from "../Text";
import TouchableLink from "./TouchableLink";

describe("TouchableLink", () => {
  let pressSpy;
  let instance;

  beforeEach(() => {
    pressSpy = jest.fn();
    instance = render(
      <TouchableLink onPress={pressSpy}>
        <Text>Some Link</Text>
      </TouchableLink>
    );
  });

  it("renders a link", () => {
    expect(instance.getByTestId("touchable-link")).toMatchSnapshot();
  });

  describe("when pressed", () => {
    beforeEach(() => {
      const link = instance.getByTestId("touchable-link");
      fireEvent.press(link);
    });

    it("invokes the callback", () => {
      expect(pressSpy).toHaveBeenCalled();
    });
  });
});

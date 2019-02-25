import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { fireEvent, render } from "../../testing";
import { isHoverEnabled } from "../../utils";
import Highlightable from "./Highlightable";

jest.mock("../../utils");

describe("Highlightable", () => {
  let instance;
  let highlightableItem;

  beforeEach(() => {
    instance = render(
      <Highlightable>
        {isHighlighted => (
          <TouchableHighlight testID="highlightable-item">
            <Text>{`${isHighlighted ? "HIGHLIGHT" : "NO HIGHLIGHT"}`}</Text>
          </TouchableHighlight>
        )}
      </Highlightable>
    );
    highlightableItem = instance.getByTestId("highlightable-item");
  });

  it("renders the item", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });

  describe("when focused", () => {
    beforeEach(() => {
      fireEvent.focus(highlightableItem);
    });

    it("renders as highlighted", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when blurred", () => {
    beforeEach(() => {
      fireEvent.focus(highlightableItem);
      fireEvent.blur(highlightableItem);
    });

    it("renders as not highlighted", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });
  });

  describe("when hover is not enabled", () => {
    beforeEach(() => {
      isHoverEnabled.mockReturnValue(false);
    });

    describe("when mouse enters", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(highlightableItem);
      });

      it("renders as not highlighted", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });
    });

    describe("when mouse leaves", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(highlightableItem);
        fireEvent.mouseLeave(highlightableItem);
      });

      it("renders as not highlighted", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });
    });
  });

  describe("when hover is enabled", () => {
    beforeEach(() => {
      isHoverEnabled.mockReturnValue(true);
    });

    describe("when mouse enters", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(highlightableItem);
      });

      it("renders as highlighted", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });
    });

    describe("when mouse leaves", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(highlightableItem);
        fireEvent.mouseLeave(highlightableItem);
      });

      it("renders as not highlighted", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });
    });
  });
});

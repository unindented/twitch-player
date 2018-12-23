import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Hoverable from "./Hoverable";

jest.mock("../../utils", () => ({
  isHoverEnabled: () => true,
}));

describe("HoverableItem", () => {
  let instance;
  let hoverableItem;

  describe("without press listeners", () => {
    beforeEach(() => {
      instance = render(
        <Hoverable>
          {isHover => (
            <TouchableHighlight testID="hoverable-item">
              <Text>{`${isHover ? "HOVER" : "NO HOVER"}`}</Text>
            </TouchableHighlight>
          )}
        </Hoverable>
      );
      hoverableItem = instance.getByTestId("hoverable-item");
    });

    it("renders the item", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });

    describe("when mouse enters", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(hoverableItem);
      });

      it("renders as hovered", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });
    });

    describe("when mouse leaves", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(hoverableItem);
        fireEvent.mouseLeave(hoverableItem);
      });

      it("renders as not hovered", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });
    });
  });

  describe("with press listeners", () => {
    let spyHoverIn;
    let spyHoverOut;

    beforeEach(() => {
      spyHoverIn = jest.fn();
      spyHoverOut = jest.fn();

      instance = render(
        <Hoverable onHoverIn={spyHoverIn} onHoverOut={spyHoverOut}>
          {isHover => (
            <TouchableHighlight testID="hoverable-item">
              <Text>{`${isHover ? "HOVER" : "NO HOVER"}`}</Text>
            </TouchableHighlight>
          )}
        </Hoverable>
      );
      hoverableItem = instance.getByTestId("hoverable-item");
    });

    it("renders the item", () => {
      expect(instance.asFragment()).toMatchSnapshot();
    });

    describe("when mouse enters", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(hoverableItem);
      });

      it("renders as hovered", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });

      it("invokes `onHoverIn`", () => {
        expect(spyHoverIn).toHaveBeenCalled();
      });
    });

    describe("when mouse enters after it had already entered", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(hoverableItem);
        fireEvent.mouseEnter(hoverableItem);
      });

      it("invokes `onHoverIn` once", () => {
        expect(spyHoverIn).toHaveBeenCalledTimes(1);
      });
    });

    describe("when mouse leaves", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(hoverableItem);
        fireEvent.mouseLeave(hoverableItem);
      });

      it("renders as not hovered", () => {
        expect(instance.asFragment()).toMatchSnapshot();
      });

      it("invokes `onHoverOut`", () => {
        expect(spyHoverOut).toHaveBeenCalled();
      });
    });

    describe("when mouse leaves after it had already left", () => {
      beforeEach(() => {
        fireEvent.mouseEnter(hoverableItem);
        fireEvent.mouseLeave(hoverableItem);
        fireEvent.mouseLeave(hoverableItem);
      });

      it("invokes `onHoverOut` once", () => {
        expect(spyHoverOut).toHaveBeenCalledTimes(1);
      });
    });
  });
});

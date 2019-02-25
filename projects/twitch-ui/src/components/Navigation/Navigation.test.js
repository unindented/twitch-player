import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import { useDimensions } from "../../hooks";
import { fireEvent, render } from "../../testing";
import Navigation from "./Navigation";

jest.mock("./NavigationIcon", () => "mock-navigation-icon");

const FakePage = ({ children }) => {
  const [dimensions, updateDimensions] = useDimensions("page");

  return <View onLayout={updateDimensions}>{dimensions && children}</View>;
};

FakePage.propTypes = {
  children: PropTypes.node.isRequired,
};

describe("Navigation", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <FakePage>
        <Navigation />
      </FakePage>
    );
  });

  it("renders nothing until layout", () => {
    expect(instance.queryByTestId("navigation")).toBeNull();
  });

  describe("with narrow parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with a horizontal layout", () => {
      expect(instance.getByTestId("navigation")).toMatchSnapshot();
    });
  });

  describe("with wide parent", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 640, height: 480 } });
    });

    it("renders with a vertical layout", () => {
      expect(instance.getByTestId("navigation")).toMatchSnapshot();
    });
  });
});

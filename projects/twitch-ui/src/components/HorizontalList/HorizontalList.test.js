import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";
import { render } from "../../testing";
import Text from "../Text";
import HorizontalList from "./HorizontalList";

const data = [
  {
    id: "33214",
    key: "33214",
    boxArtURL: "categories/Fortnite-376x500.jpg",
  },
  {
    id: "509658",
    key: "509658",
    boxArtURL: "categories/Just%20Chatting-376x500.jpg",
  },
  {
    id: "5945",
    key: "5945",
    boxArtURL: "categories/Atlas-376x500.jpg",
  },
];

const ImageItem = ({ item: { boxArtURL } }) => {
  return <Image source={{ uri: boxArtURL }} />;
};

ImageItem.propTypes = {
  item: PropTypes.shape({
    boxArtURL: PropTypes.string.isRequired,
  }).isRequired,
};

describe("HorizontalList", () => {
  let instance;

  describe("without header nor footer", () => {
    beforeEach(() => {
      instance = render(
        <HorizontalList
          data={data}
          initialNumToRender={2}
          renderItem={ImageItem}
        />
      );
    });

    it("renders a list", () => {
      expect(instance.getByTestId("horizontal-list")).toMatchSnapshot();
    });
  });

  describe("with header", () => {
    beforeEach(() => {
      const renderHeader = () => <Text>HEADER</Text>;
      instance = render(
        <HorizontalList
          data={data}
          initialNumToRender={2}
          renderItem={ImageItem}
          renderHeader={renderHeader}
        />
      );
    });

    it("renders a list", () => {
      expect(instance.getByTestId("horizontal-list")).toMatchSnapshot();
    });
  });

  describe("with footer", () => {
    beforeEach(() => {
      const renderFooter = () => <Text>FOOTER</Text>;
      instance = render(
        <HorizontalList
          data={data}
          initialNumToRender={2}
          renderItem={ImageItem}
          renderFooter={renderFooter}
        />
      );
    });

    it("renders a list", () => {
      expect(instance.getByTestId("horizontal-list")).toMatchSnapshot();
    });
  });
});

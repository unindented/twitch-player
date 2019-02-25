import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";
import { render } from "../../testing";
import Text from "../Text";
import GridList from "./GridList";

const data = [
  {
    id: "31876146512",
    key: "31876146512",
    previewImageURL: "channels/live_user_tfue-800x450.jpg",
  },
  {
    id: "31879434944",
    key: "31879434944",
    previewImageURL: "channels/live_user_ninja-800x450.jpg",
  },
  {
    id: "31880087200",
    key: "31880087200",
    previewImageURL: "channels/live_user_summit1g-800x450.jpg",
  },
  {
    id: "31878417536",
    key: "31878417536",
    previewImageURL: "channels/live_user_timthetatman-800x450.jpg",
  },
  {
    id: "31878723504",
    key: "31878723504",
    previewImageURL: "channels/live_user_shroud-800x450.jpg",
  },
  {
    id: "31876784656",
    key: "31876784656",
    previewImageURL: "channels/live_user_nickmercs-800x450.jpg",
  },
];

const ImageItem = ({ item: { previewImageURL } }) => {
  return <Image source={{ uri: previewImageURL }} />;
};

ImageItem.propTypes = {
  item: PropTypes.shape({
    previewImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

describe("GridList", () => {
  let instance;

  describe("without header nor footer", () => {
    beforeEach(() => {
      instance = render(
        <GridList
          data={data}
          initialNumToRender={1}
          numColumns={2}
          renderItem={ImageItem}
        />
      );
    });

    it("renders a list", () => {
      expect(instance.getByTestId("grid-list")).toMatchSnapshot();
    });
  });

  describe("with header", () => {
    beforeEach(() => {
      const renderHeader = () => <Text>HEADER</Text>;
      instance = render(
        <GridList
          data={data}
          initialNumToRender={1}
          numColumns={2}
          renderItem={ImageItem}
          renderHeader={renderHeader}
        />
      );
    });

    it("renders a list", () => {
      expect(instance.getByTestId("grid-list")).toMatchSnapshot();
    });
  });

  describe("with footer", () => {
    beforeEach(() => {
      const renderFooter = () => <Text>FOOTER</Text>;
      instance = render(
        <GridList
          data={data}
          initialNumToRender={1}
          numColumns={2}
          renderItem={ImageItem}
          renderFooter={renderFooter}
        />
      );
    });

    it("renders a list", () => {
      expect(instance.getByTestId("grid-list")).toMatchSnapshot();
    });
  });
});

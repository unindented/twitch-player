import { storiesOf } from "@storybook/react";
import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";
import GridList from ".";

const data = [
  {
    previewImageURL: "channels/live_user_tfue-800x450.jpg",
  },
  {
    previewImageURL: "channels/live_user_ninja-800x450.jpg",
  },
  {
    previewImageURL: "channels/live_user_summit1g-800x450.jpg",
  },
  {
    previewImageURL: "channels/live_user_timthetatman-800x450.jpg",
  },
  {
    previewImageURL: "channels/live_user_shroud-800x450.jpg",
  },
  {
    previewImageURL: "channels/live_user_nickmercs-800x450.jpg",
  },
];

const ImageItem = ({ item: { previewImageURL } }) => {
  return (
    <Image
      source={{ uri: previewImageURL }}
      style={{ width: 400, height: 225 }}
    />
  );
};

ImageItem.propTypes = {
  item: PropTypes.shape({
    previewImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

storiesOf("Static Components|GridList", module).add("default", () => (
  <GridList
    data={data}
    initialNumToRender={1}
    numColumns={2}
    renderItem={ImageItem}
  />
));

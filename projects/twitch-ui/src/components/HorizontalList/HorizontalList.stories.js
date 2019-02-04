import { storiesOf } from "@storybook/react";
import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";
import HorizontalList from ".";

const data = [
  {
    boxArtURL: "games/Fortnite-376x500.jpg",
  },
  {
    boxArtURL: "games/Just%20Chatting-376x500.jpg",
  },
  {
    boxArtURL: "games/Atlas-376x500.jpg",
  },
];

const ImageItem = ({ item: { boxArtURL } }) => {
  return (
    <Image source={{ uri: boxArtURL }} style={{ width: 188, height: 250 }} />
  );
};

ImageItem.propTypes = {
  item: PropTypes.shape({
    boxArtURL: PropTypes.string.isRequired,
  }).isRequired,
};

storiesOf("Components|HorizontalList", module).add("default", () => (
  <HorizontalList data={data} renderItem={ImageItem} />
));

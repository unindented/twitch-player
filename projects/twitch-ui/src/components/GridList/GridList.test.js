import { render } from "@twitch-player/testing/dist/unit";
import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";
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

  beforeEach(() => {
    instance = render(
      <GridList data={data} numColumns={2} renderItem={ImageItem} />
    );
  });

  it("renders a list", () => {
    expect(instance.getByTestId("grid-list")).toMatchSnapshot();
  });
});

import { render } from "@twitch-player/testing/dist/unit";
import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";
import HorizontalList from "./HorizontalList";

const data = [
  {
    id: "33214",
    key: "33214",
    name: "Fortnite",
    boxArtURL: "games/Fortnite-376x500.jpg",
  },
  {
    id: "509658",
    key: "509658",
    name: "Just Chatting",
    boxArtURL: "games/Just%20Chatting-376x500.jpg",
  },
  {
    id: "5945",
    key: "5945",
    name: "Atlas",
    boxArtURL: "games/Atlas-376x500.jpg",
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

  beforeEach(() => {
    instance = render(<HorizontalList data={data} renderItem={ImageItem} />);
  });

  it("renders a list", () => {
    expect(instance.getByTestId("horizontal-list")).toMatchSnapshot();
  });
});

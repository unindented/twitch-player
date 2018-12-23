import { StreamType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo } from "react";
import HorizontalList from "../HorizontalList";
import StreamItem from "../StreamItem";

const StreamList = memo(({ list, testID = "stream-list" }) => {
  return <HorizontalList data={list} renderItem={StreamItem} testID={testID} />;
});

StreamList.propTypes = {
  list: PropTypes.arrayOf(StreamType).isRequired,
  testID: PropTypes.string,
};

export default StreamList;

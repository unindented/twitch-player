import { GameType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo } from "react";
import HorizontalList from "../HorizontalList";
import GameItem from "../GameItem";

const GameList = memo(({ list, testID = "game-list" }) => {
  return <HorizontalList data={list} renderItem={GameItem} testID={testID} />;
});

GameList.propTypes = {
  list: PropTypes.arrayOf(GameType).isRequired,
  testID: PropTypes.string,
};

export default GameList;

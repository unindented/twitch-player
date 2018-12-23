import { TopGamesQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import GameList from "../../components/GameList";
import RetryButton from "../../components/RetryButton";

const TopGames = ({ testID = "top-categories" }) => {
  const { data, error, refetch } = useQuery(TopGamesQuery);
  const list = !error ? data.games.edges.map(({ node }) => node) : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <GameList list={list} testID={testID} />
  );
};

TopGames.propTypes = {
  testID: PropTypes.string,
};

export default TopGames;

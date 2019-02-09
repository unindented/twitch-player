import { TopGamesQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import GameGrid from "../../components/GameGrid";
import RetryButton from "../../components/RetryButton";

const AllCategories = ({ testID = "all-categories" }) => {
  const { data, error, refetch } = useQuery(TopGamesQuery, {
    suspend: true,
    variables: { first: 25 },
  });
  const list = !error ? data.games.edges.map(({ node }) => node) : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <GameGrid list={list} testID={testID} />
  );
};

AllCategories.propTypes = {
  testID: PropTypes.string,
};

export default AllCategories;

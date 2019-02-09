import { CategoryStreamsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import RetryButton from "../../components/RetryButton";
import StreamGrid from "../../components/StreamGrid";

const CategoryStreams = ({ name, testID = "category-streams" }) => {
  const { data, error, refetch } = useQuery(CategoryStreamsQuery, {
    suspend: true,
    variables: { name },
  });
  const list = !error
    ? data.game.streams.edges.map(({ node }) => node)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <StreamGrid list={list} testID={testID} />
  );
};

CategoryStreams.propTypes = {
  name: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default CategoryStreams;

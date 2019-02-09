import { FeaturedStreamsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import RetryButton from "../../components/RetryButton";
import StreamList from "../../components/StreamList";

const FeaturedStreams = ({ testID = "featured-streams" }) => {
  const { data, error, refetch } = useQuery(FeaturedStreamsQuery, {
    suspend: true,
  });
  const list = !error
    ? data.featuredStreams.map(({ stream }) => stream)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <StreamList list={list} testID={testID} />
  );
};

FeaturedStreams.propTypes = {
  testID: PropTypes.string,
};

export default FeaturedStreams;

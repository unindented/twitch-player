import { TopStreamsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import RetryButton from "../../components/RetryButton";
import StreamList from "../../components/StreamList";

const TopStreams = ({ platformType = "all", testID = "top-streams" }) => {
  const { data, error, refetch } = useQuery(TopStreamsQuery, {
    suspend: true,
    variables: { platformType },
  });
  const list = !error ? data.streams.edges.map(({ node }) => node) : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <StreamList list={list} testID={testID} />
  );
};

TopStreams.propTypes = {
  platformType: PropTypes.oneOf(["all", "ps4", "xbox"]),
  testID: PropTypes.string,
};

export default TopStreams;

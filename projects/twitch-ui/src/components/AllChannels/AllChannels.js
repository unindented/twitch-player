import { TopStreamsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import StreamGrid from "../../components/StreamGrid";
import RetryButton from "../../components/RetryButton";

const AllChannels = ({ testID = "all-channels" }) => {
  const { data, error, refetch } = useQuery(TopStreamsQuery, {
    variables: { first: 12 },
  });
  const list = !error ? data.streams.edges.map(({ node }) => node) : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <StreamGrid list={list} testID={testID} />
  );
};

AllChannels.propTypes = {
  testID: PropTypes.string,
};

export default AllChannels;

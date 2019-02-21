import { TopChannelsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import ChannelGrid from "../../components/ChannelGrid";
import RetryButton from "../../components/RetryButton";

const AllChannels = ({ testID = "all-channels" }) => {
  const { data, error, refetch } = useQuery(TopChannelsQuery, {
    suspend: true,
    variables: { first: 12 },
  });
  const channels = !error
    ? data.channels.edges.map(({ node }) => node)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <ChannelGrid list={channels} testID={testID} />
  );
};

AllChannels.propTypes = {
  testID: PropTypes.string,
};

export default AllChannels;

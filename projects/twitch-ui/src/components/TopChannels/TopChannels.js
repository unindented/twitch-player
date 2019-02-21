import { TopChannelsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import RetryButton from "../../components/RetryButton";
import ChannelList from "../../components/ChannelList";

const TopChannels = ({ platformType = "all", testID = "top-channels" }) => {
  const { data, error, refetch } = useQuery(TopChannelsQuery, {
    suspend: true,
    variables: { platformType },
  });
  const channels = !error
    ? data.channels.edges.map(({ node }) => node)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <ChannelList list={channels} testID={testID} />
  );
};

TopChannels.propTypes = {
  platformType: PropTypes.oneOf(["all", "ps4", "xbox"]),
  testID: PropTypes.string,
};

export default TopChannels;

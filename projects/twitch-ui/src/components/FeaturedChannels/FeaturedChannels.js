import { FeaturedChannelsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import RetryButton from "../../components/RetryButton";
import ChannelList from "../../components/ChannelList";

const FeaturedChannels = ({ testID = "featured-channels" }) => {
  const { data, error, refetch } = useQuery(FeaturedChannelsQuery, {
    suspend: true,
  });
  const channels = !error
    ? data.channels.map(({ channel }) => channel)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <ChannelList list={channels} testID={testID} />
  );
};

FeaturedChannels.propTypes = {
  testID: PropTypes.string,
};

export default FeaturedChannels;

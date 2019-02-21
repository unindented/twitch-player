import { CategoryChannelsQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import RetryButton from "../../components/RetryButton";
import ChannelGrid from "../../components/ChannelGrid";

const CategoryChannels = ({ name, testID = "category-channels" }) => {
  const { data, error, refetch } = useQuery(CategoryChannelsQuery, {
    suspend: true,
    variables: { name },
  });
  const channels = !error
    ? data.category.channels.edges.map(({ node }) => node)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <ChannelGrid list={channels} testID={testID} />
  );
};

CategoryChannels.propTypes = {
  name: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default CategoryChannels;

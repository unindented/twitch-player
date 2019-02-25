import {
  CategoryChannelsQuery,
  extractChannelsForCategory,
} from "@twitch-player/data";
import { clamp } from "@twitch-player/utils";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { useQuery } from "react-apollo-hooks";
import ChannelGrid from "../../components/ChannelGrid";
import Heading from "../../components/Heading";
import RetryButton from "../../components/RetryButton";
import { useChannelGrid } from "../../hooks";

const CategoryChannels = ({ name, heading, testID = "category-channels" }) => {
  const { numColumns, numRows } = useChannelGrid();
  const channelCount = clamp(numColumns * (numRows + 1), 10, 40);

  const { data, error, refetch } = useQuery(CategoryChannelsQuery, {
    suspend: true,
    variables: { name, first: channelCount },
  });

  const channels = !error ? extractChannelsForCategory(data) : undefined;
  // istanbul ignore next
  const renderHeader = useCallback(
    () => <Heading level="2">{heading}</Heading>,
    [heading]
  );

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <ChannelGrid list={channels} renderHeader={renderHeader} testID={testID} />
  );
};

CategoryChannels.propTypes = {
  name: PropTypes.string.isRequired,
  heading: PropTypes.string,
  testID: PropTypes.string,
};

export default memo(CategoryChannels);

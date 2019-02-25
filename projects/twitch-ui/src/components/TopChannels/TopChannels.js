import {
  TopChannelsQuery,
  extractChannelsForPlatformType,
} from "@twitch-player/data";
import { clamp } from "@twitch-player/utils";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { useQuery } from "react-apollo-hooks";
import ChannelList from "../../components/ChannelList";
import Heading from "../../components/Heading";
import RetryButton from "../../components/RetryButton";
import { useChannelList } from "../../hooks";

const TopChannels = ({
  heading,
  platformType = "all",
  testID = "top-channels",
}) => {
  const { numColumns } = useChannelList();
  const channelCount = clamp(numColumns * 1.5, 3, 20);

  const { data, error, refetch } = useQuery(TopChannelsQuery, {
    suspend: true,
    variables: { platformType, first: channelCount },
  });

  const extractChannels = extractChannelsForPlatformType(platformType);
  const channels = !error ? extractChannels(data) : undefined;
  // istanbul ignore next
  const renderHeader = useCallback(
    () => <Heading level="2">{heading}</Heading>,
    [heading]
  );

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <ChannelList
      list={channels}
      renderHeader={renderHeader}
      testID={`${testID}-${platformType}`}
    />
  );
};

TopChannels.propTypes = {
  heading: PropTypes.string.isRequired,
  platformType: PropTypes.oneOf(["all", "ps4", "xbox"]),
  testID: PropTypes.string,
};

export default memo(TopChannels);

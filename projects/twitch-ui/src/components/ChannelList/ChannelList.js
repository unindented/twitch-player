import { ChannelType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { View } from "react-native";
import { useChannelList } from "../../hooks";
import ChannelItem from "../ChannelItem";
import HorizontalList from "../HorizontalList";

const ChannelList = ({
  list,
  renderHeader,
  renderFooter,
  testID = "channel-list",
}) => {
  const {
    numColumns,
    imageWidth,
    imageHeight,
    getItemLayout,
    renderItemStyle,
  } = useChannelList(list.length);

  const renderItem = useCallback(
    ({ item, index }) => {
      const style = renderItemStyle(index);

      return (
        <View style={style}>
          <ChannelItem item={item} width={imageWidth} height={imageHeight} />
        </View>
      );
    },
    [imageWidth, imageHeight]
  );

  return (
    <View testID={testID}>
      <HorizontalList
        key={`${imageWidth}x${imageHeight}`}
        data={list}
        getItemLayout={getItemLayout}
        initialNumToRender={numColumns + 1}
        renderItem={renderItem}
        renderHeader={renderHeader}
        renderFooter={renderFooter}
      />
    </View>
  );
};

ChannelList.propTypes = {
  list: PropTypes.arrayOf(ChannelType).isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

export default memo(ChannelList);

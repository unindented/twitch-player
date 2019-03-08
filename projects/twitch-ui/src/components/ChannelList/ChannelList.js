import { ChannelType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
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
      const itemStyle = [styles.item, renderItemStyle(index)];

      return (
        <View style={itemStyle}>
          <ChannelItem item={item} width={imageWidth} height={imageHeight} />
        </View>
      );
    },
    [imageWidth, imageHeight]
  );

  return (
    <HorizontalList
      key={`${imageWidth}x${imageHeight}`}
      data={list}
      getItemLayout={getItemLayout}
      initialNumToRender={numColumns + 1}
      renderItem={renderItem}
      renderHeader={renderHeader}
      renderFooter={renderFooter}
      testID={testID}
    />
  );
};

ChannelList.propTypes = {
  list: PropTypes.arrayOf(ChannelType).isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  item: {
    display: "block",
  },
});

export default memo(ChannelList);

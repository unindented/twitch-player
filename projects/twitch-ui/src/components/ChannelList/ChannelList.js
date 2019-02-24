import { ChannelType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { View } from "react-native";
import HorizontalList from "../HorizontalList";
import ChannelItem from "../ChannelItem";
import { useTheme, useResponsiveItemDimensions } from "../../hooks";

const ChannelList = ({ list, testID = "channel-list" }) => {
  const { layout } = useTheme();
  const maxItemHeight = layout.maxChannelHeight;
  const maxItemWidth = layout.maxChannelWidth;
  const spaceBetween = layout.gapSmall;
  const spaceSides = layout.gapExtraLarge;
  const spaceBottom = layout.gapMedium;

  const [itemDimensions, updateLayout] = useResponsiveItemDimensions({
    maxItemWidth,
    maxItemHeight,
    spaceSides,
    spaceBetween,
  });
  const { itemWidth, itemHeight } = itemDimensions;

  const renderItem = useCallback(
    ({ item, index }) => {
      const isFirstItem = index === 0;
      const isLastItem = index === list.length - 1;

      const style = {
        marginStart: isFirstItem ? spaceSides : spaceBetween,
        marginEnd: isLastItem ? spaceSides : spaceBetween,
        marginBottom: spaceBottom,
      };

      return (
        <View style={style}>
          <ChannelItem item={item} width={itemWidth} height={itemHeight} />
        </View>
      );
    },
    [itemWidth, itemHeight]
  );

  return (
    <View testID={testID} onLayout={updateLayout}>
      {itemHeight && itemWidth && (
        <HorizontalList
          key={`${itemWidth}x${itemHeight}`}
          data={list}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

ChannelList.propTypes = {
  list: PropTypes.arrayOf(ChannelType).isRequired,
  testID: PropTypes.string,
};

export default memo(ChannelList);

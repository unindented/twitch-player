import { ChannelType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { View } from "react-native";
import GridList from "../GridList";
import ChannelItem from "../ChannelItem";
import { useTheme, useResponsiveItemDimensions } from "../../hooks";

const ChannelGrid = ({ list, testID = "channel-grid" }) => {
  const { layout } = useTheme();
  const maxItemHeight = layout.maxChannelHeight;
  const maxItemWidth = layout.maxChannelWidth;
  const spaceBetween = layout.gapSmall;
  const spaceSides = layout.gapLarge;
  const spaceBottom = layout.gapMedium;

  const [itemDimensions, updateLayout] = useResponsiveItemDimensions({
    maxItemWidth,
    maxItemHeight,
    spaceSides,
    spaceBetween,
  });
  const { numColumns, itemWidth, itemHeight } = itemDimensions;

  const renderItem = useCallback(
    ({ item, index }) => {
      const isFirstItem = index % numColumns === 0;
      const isLastItem = index % numColumns === numColumns - 1;

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
    <View onLayout={updateLayout} testID={testID}>
      {itemHeight && itemWidth && (
        <GridList
          key={`${itemWidth}x${itemHeight}`}
          data={list}
          numColumns={numColumns}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

ChannelGrid.propTypes = {
  list: PropTypes.arrayOf(ChannelType).isRequired,
  testID: PropTypes.string,
};

export default memo(ChannelGrid);

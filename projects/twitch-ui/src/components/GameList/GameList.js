import { GameType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { View } from "react-native";
import HorizontalList from "../HorizontalList";
import GameItem from "../GameItem";
import { useTheme, useResponsiveItemDimensions } from "../../hooks";

const GameList = ({ list, testID = "game-list" }) => {
  const { layout } = useTheme();
  const maxItemHeight = layout.maxGameHeight;
  const maxItemWidth = layout.maxGameWidth;
  const spaceBetween = layout.gapSmall;
  const spaceSides = layout.gapLarge;
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
          <GameItem item={item} width={itemWidth} height={itemHeight} />
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

GameList.propTypes = {
  list: PropTypes.arrayOf(GameType).isRequired,
  testID: PropTypes.string,
};

export default memo(GameList);

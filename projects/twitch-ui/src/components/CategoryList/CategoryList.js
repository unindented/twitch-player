import { CategoryType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { View } from "react-native";
import HorizontalList from "../HorizontalList";
import CategoryItem from "../CategoryItem";
import { useTheme, useResponsiveItemDimensions } from "../../hooks";

const CategoryList = ({ list, testID = "category-list" }) => {
  const { layout } = useTheme();
  const maxItemHeight = layout.maxCategoryHeight;
  const maxItemWidth = layout.maxCategoryWidth;
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
          <CategoryItem item={item} width={itemWidth} height={itemHeight} />
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

CategoryList.propTypes = {
  list: PropTypes.arrayOf(CategoryType).isRequired,
  testID: PropTypes.string,
};

export default memo(CategoryList);

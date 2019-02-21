import { CategoryType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { View } from "react-native";
import CategoryItem from "../CategoryItem";
import GridList from "../GridList";
import { useTheme, useResponsiveItemDimensions } from "../../hooks";

const CategoryGrid = ({ list, testID = "category-grid" }) => {
  const { layout } = useTheme();
  const maxItemHeight = layout.maxCategoryHeight;
  const maxItemWidth = layout.maxCategoryWidth;
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
          <CategoryItem item={item} width={itemWidth} height={itemHeight} />
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

CategoryGrid.propTypes = {
  list: PropTypes.arrayOf(CategoryType).isRequired,
  testID: PropTypes.string,
};

export default memo(CategoryGrid);

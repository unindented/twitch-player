import { CategoryType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useCategoryGrid, useGridListKeyboardNavigation } from "../../hooks";
import CategoryItem from "../CategoryItem";
import GridList from "../GridList";

const CategoryGrid = ({
  list,
  renderHeader,
  renderFooter,
  testID = "category-grid",
}) => {
  const ref = useGridListKeyboardNavigation();

  const {
    numColumns,
    numRows,
    imageWidth,
    imageHeight,
    getItemLayout,
    renderItemStyle,
  } = useCategoryGrid(list.length);

  const renderItem = useCallback(
    ({ item, index }) => {
      const itemStyle = [styles.item, renderItemStyle(index)];

      return (
        <View style={itemStyle}>
          <CategoryItem item={item} width={imageWidth} height={imageHeight} />
        </View>
      );
    },
    [imageWidth, imageHeight]
  );

  return (
    <GridList
      key={`${imageWidth}x${imageHeight}`}
      data={list}
      initialNumToRender={numRows}
      numColumns={numColumns}
      getItemLayout={getItemLayout}
      renderItem={renderItem}
      renderHeader={renderHeader}
      renderFooter={renderFooter}
      ref={ref}
      testID={testID}
    />
  );
};

CategoryGrid.propTypes = {
  list: PropTypes.arrayOf(CategoryType).isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  item: {
    display: "block",
  },
});

export default memo(CategoryGrid);

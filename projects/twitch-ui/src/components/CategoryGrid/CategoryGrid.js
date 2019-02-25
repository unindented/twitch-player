import { CategoryType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useCategoryGrid } from "../../hooks";
import CategoryItem from "../CategoryItem";
import GridList from "../GridList";

const CategoryGrid = ({
  list,
  renderHeader,
  renderFooter,
  testID = "category-grid",
}) => {
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
      const style = renderItemStyle(index);

      return (
        <View style={style}>
          <CategoryItem item={item} width={imageWidth} height={imageHeight} />
        </View>
      );
    },
    [imageWidth, imageHeight]
  );

  return (
    <View style={styles.root} testID={testID}>
      <GridList
        key={`${imageWidth}x${imageHeight}`}
        data={list}
        initialNumToRender={numRows}
        numColumns={numColumns}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        renderHeader={renderHeader}
        renderFooter={renderFooter}
      />
    </View>
  );
};

CategoryGrid.propTypes = {
  list: PropTypes.arrayOf(CategoryType).isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default memo(CategoryGrid);

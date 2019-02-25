import { CategoryType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { View } from "react-native";
import { useCategoryList } from "../../hooks";
import CategoryItem from "../CategoryItem";
import HorizontalList from "../HorizontalList";

const CategoryList = ({
  list,
  renderHeader,
  renderFooter,
  testID = "category-list",
}) => {
  const {
    numColumns,
    imageWidth,
    imageHeight,
    getItemLayout,
    renderItemStyle,
  } = useCategoryList(list.length);

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

CategoryList.propTypes = {
  list: PropTypes.arrayOf(CategoryType).isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

export default memo(CategoryList);

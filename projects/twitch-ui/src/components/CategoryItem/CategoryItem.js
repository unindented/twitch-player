import { CategoryType } from "@twitch-player/data";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Highlightable from "../Highlightable";
import InternalTouchableLink from "../InternalTouchableLink";
import CategoryItemDetail from "./CategoryItemDetail";
import CategoryItemImage from "./CategoryItemImage";

const CategoryItem = ({
  item: { name, boxArtURL, viewersCount },
  width: boxArtWidth,
  height: boxArtHeight,
  testID = "category-item",
}) => {
  const [{ colors }] = useTheme();

  return (
    <Highlightable>
      {isHighlighted => {
        const wrapperStyle = {
          backgroundColor: isHighlighted
            ? colors.itemBackgroundHover
            : "transparent",
        };

        return (
          <InternalTouchableLink
            href={`/categories/${name}`}
            style={styles.root}
            testID={testID}
          >
            <View style={wrapperStyle} testID={`${testID}-wrapper`}>
              <CategoryItemImage
                url={boxArtURL}
                name={name}
                width={boxArtWidth}
                height={boxArtHeight}
                testID={`${testID}-image`}
              />
              <CategoryItemDetail
                name={name}
                viewersCount={viewersCount}
                width={boxArtWidth}
                isHighlighted={isHighlighted}
                testID={`${testID}-detail`}
              />
            </View>
          </InternalTouchableLink>
        );
      }}
    </Highlightable>
  );
};

CategoryItem.propTypes = {
  item: CategoryType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    outline: "none",
  },
});

export default memo(CategoryItem);

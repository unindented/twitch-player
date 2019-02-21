import { CategoryType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { View } from "react-native";
import { useTheme } from "../../hooks";
import Hoverable from "../Hoverable";
import InternalTouchableLink from "../InternalTouchableLink";
import CategoryItemDetail from "./CategoryItemDetail";
import CategoryItemImage from "./CategoryItemImage";

const CategoryItem = ({
  item: { name, boxArtURL, viewersCount },
  width: boxArtWidth,
  height: boxArtHeight,
  testID = "category-item",
}) => {
  const { colors } = useTheme();

  return (
    <Hoverable>
      {isHover => {
        const wrapperStyle = {
          backgroundColor: isHover ? colors.itemBackgroundHover : "transparent",
        };

        return (
          <InternalTouchableLink href={`/categories/${name}`} testID={testID}>
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
                isHover={isHover}
                testID={`${testID}-detail`}
              />
            </View>
          </InternalTouchableLink>
        );
      }}
    </Hoverable>
  );
};

CategoryItem.propTypes = {
  item: CategoryType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

export default memo(CategoryItem);

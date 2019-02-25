import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image } from "react-native";
import { processImageTemplate } from "../../utils";

const CategoryItemImage = ({
  url,
  name,
  width: boxArtWidth,
  height: boxArtHeight,
  testID = "category-item-image",
}) => {
  const [{ colors, layout }] = useTheme();

  const imageURL = processImageTemplate(
    url,
    layout.maxCategoryWidth,
    layout.maxCategoryHeight
  );

  const imageStyle = {
    backgroundColor: colors.itemBackground,
    height: boxArtHeight,
    width: boxArtWidth,
  };

  return (
    <Image
      source={{ uri: imageURL }}
      accessibilityLabel={name}
      style={imageStyle}
      testID={testID}
    />
  );
};

CategoryItemImage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

export default memo(CategoryItemImage);

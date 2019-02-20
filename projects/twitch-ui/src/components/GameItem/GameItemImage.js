import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image } from "react-native";
import { useTheme } from "../../hooks";
import { processImageTemplate } from "../../utils";

const GameItemImage = ({
  url,
  name,
  width: boxArtWidth,
  height: boxArtHeight,
  testID = "game-item-image",
}) => {
  const { colors, layout } = useTheme();

  const imageURL = processImageTemplate(
    url,
    layout.maxGameWidth,
    layout.maxGameHeight
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

GameItemImage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

export default memo(GameItemImage);

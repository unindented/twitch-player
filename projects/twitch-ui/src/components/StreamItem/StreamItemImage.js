import PropTypes from "prop-types";
import React, { memo } from "react";
import { ImageBackground } from "react-native";
import { useTheme } from "../../hooks";
import { processImageTemplate } from "../../utils";
import StreamItemImageOverlay from "./StreamItemImageOverlay";

const StreamItemImage = ({
  url,
  title,
  viewersCount,
  width: previewImageWidth,
  height: previewImageHeight,
  testID = "stream-item-image",
}) => {
  const { colors, layout } = useTheme();

  const imageURL = processImageTemplate(
    url,
    layout.maxStreamWidth,
    layout.maxStreamHeight
  );

  const imageStyle = {
    backgroundColor: colors.itemBackground,
    height: previewImageHeight,
    width: previewImageWidth,
  };

  return (
    <ImageBackground
      source={{ uri: imageURL }}
      accessibilityLabel={title}
      style={imageStyle}
      testID={testID}
    >
      <StreamItemImageOverlay
        viewersCount={viewersCount}
        testID={`${testID}-overlay`}
      />
    </ImageBackground>
  );
};

StreamItemImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  viewersCount: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

export default memo(StreamItemImage);

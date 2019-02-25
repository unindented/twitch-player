import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Text } from "react-native";

const CustomText = ({ style = [], ...props }) => {
  const [{ typography }] = useTheme();

  const rootStyle = [
    {
      fontFamily: typography.family,
      lineHeight: `${typography.lineHeight}`,
    },
  ].concat(style);

  return <Text {...props} style={rootStyle} />;
};

CustomText.propTypes = {
  style: PropTypes.any,
};

export default memo(CustomText);

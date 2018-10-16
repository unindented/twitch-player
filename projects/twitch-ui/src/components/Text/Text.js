import PropTypes from "prop-types";
import React, { memo } from "react";
import { Text } from "react-native";
import { useTheme } from "../../hooks";

const CustomText = memo(({ style = [], ...props }) => {
  const { typography } = useTheme();
  const fontFamily = typography.family;
  const compositeStyle = [].concat(style).concat({ fontFamily });

  return <Text {...props} style={compositeStyle} />;
});

CustomText.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default CustomText;

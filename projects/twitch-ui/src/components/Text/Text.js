import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "../../hooks";

const CustomText = memo(({ style = [], ...props }) => {
  const { typography } = useTheme();

  const rootStyle = [
    styles.root,
    {
      fontFamily: typography.family,
    },
  ].concat(style);

  return <Text {...props} style={rootStyle} />;
});

CustomText.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

const styles = StyleSheet.create({
  root: {
    lineHeight: "1.5",
  },
});

export default CustomText;

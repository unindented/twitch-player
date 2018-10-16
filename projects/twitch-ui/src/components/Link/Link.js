import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import { useTheme } from "../../hooks";

const Link = ({ href, style = [], children, testID = "link", onPress }) => {
  const { colors } = useTheme();
  const color = colors.link;
  const compositeStyle = [].concat(style).concat({ color });

  return (
    <Text
      accessibilityRole="link"
      href={href}
      style={compositeStyle}
      testID={testID}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default Link;

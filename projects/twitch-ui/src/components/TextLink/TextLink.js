import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";

const TextLink = ({ testID = "text-link", ...props }) => {
  return <Text {...props} accessibilityRole="link" testID={testID} />;
};

TextLink.propTypes = {
  testID: PropTypes.string,
};

export default TextLink;

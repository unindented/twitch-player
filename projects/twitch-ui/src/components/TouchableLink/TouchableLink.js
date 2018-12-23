import PropTypes from "prop-types";
import React from "react";
import { TouchableOpacity } from "react-native";

const TouchableLink = ({ testID = "touchable-link", ...props }) => {
  return <TouchableOpacity {...props} testID={testID} />;
};

TouchableLink.propTypes = {
  testID: PropTypes.string,
};

export default TouchableLink;

import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Linking } from "react-native";
import TouchableLink from "../TouchableLink";

const ExternalTouchableLink = ({
  href,
  testID = "external-touchable-link",
  ...props
}) => {
  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      Linking.openURL(href);
    },
    [href]
  );

  return <TouchableLink {...props} testID={testID} onPress={handlePress} />;
};

ExternalTouchableLink.propTypes = {
  href: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default ExternalTouchableLink;

import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Linking } from "react-native";
import TextLink from "../TextLink";

const ExternalTextLink = ({ testID = "external-text-link", ...props }) => {
  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      Linking.openURL(props.href);
    },
    [props.href]
  );

  return <TextLink {...props} testID={testID} onPress={handlePress} />;
};

ExternalTextLink.propTypes = {
  href: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default ExternalTextLink;

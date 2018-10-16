import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Linking } from "react-native";
import Link from "../Link";

const ExternalLink = props => {
  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      Linking.openURL(props.href);
    },
    [props.href]
  );

  return <Link {...props} onPress={handlePress} />;
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
};

export default ExternalLink;

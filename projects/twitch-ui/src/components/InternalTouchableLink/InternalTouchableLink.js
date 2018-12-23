import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useRouter } from "../../hooks";
import TouchableLink from "../TouchableLink";

const InternalTouchableLink = ({
  href,
  testID = "internal-touchable-link",
  ...props
}) => {
  const { history } = useRouter();

  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      history.push(href);
    },
    [href]
  );

  return <TouchableLink {...props} testID={testID} onPress={handlePress} />;
};

InternalTouchableLink.propTypes = {
  href: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default InternalTouchableLink;

import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useRouter } from "../../hooks";
import TextLink from "../TextLink";

const InternalTextLink = ({ testID = "internal-text-link", ...props }) => {
  const { history } = useRouter();

  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      history.push(props.href);
    },
    [props.href]
  );

  return <TextLink {...props} testID={testID} onPress={handlePress} />;
};

InternalTextLink.propTypes = {
  href: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default InternalTextLink;

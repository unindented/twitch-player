import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useRouter } from "../../hooks";
import Link from "../Link";

const InternalLink = props => {
  const { history } = useRouter();

  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      history.push(props.href);
    },
    [props.href]
  );

  return <Link {...props} onPress={handlePress} />;
};

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
};

export default InternalLink;

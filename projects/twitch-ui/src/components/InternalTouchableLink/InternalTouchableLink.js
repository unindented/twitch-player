import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Route } from "react-router";
import { useRouter } from "../../hooks";
import TouchableLink from "../TouchableLink";

const InternalTouchableLink = ({
  href,
  style = [],
  activeStyle = [],
  testID = "internal-touchable-link",
  ...props
}) => {
  const { history, location } = useRouter();

  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      history.push(href);
    },
    [href]
  );

  return (
    <Route path={href} location={location} exact={true}>
      {({ match }) => {
        const isActive = !!match;
        const rootStyle = [].concat(style).concat(isActive ? activeStyle : []);

        return (
          <TouchableLink
            {...props}
            style={rootStyle}
            testID={testID}
            onPress={handlePress}
          />
        );
      }}
    </Route>
  );
};

InternalTouchableLink.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.any,
  activeStyle: PropTypes.any,
  testID: PropTypes.string,
};

export default InternalTouchableLink;

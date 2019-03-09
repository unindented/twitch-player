import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Route } from "react-router";
import { useRouter } from "../../hooks";
import TextLink from "../TextLink";

const InternalTextLink = ({
  style = [],
  activeStyle = [],
  testID = "internal-text-link",
  ...props
}) => {
  const { history, location } = useRouter();

  const handlePress = useCallback(
    evt => {
      evt.preventDefault();
      history.push(props.href);
    },
    [props.href]
  );

  return (
    <Route path={props.href} location={location} exact={true}>
      {({ match }) => {
        const isActive = !!match;
        const rootStyle = [].concat(style).concat(isActive ? activeStyle : []);

        return (
          <TextLink
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

InternalTextLink.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.any,
  activeStyle: PropTypes.any,
  testID: PropTypes.string,
};

export default InternalTextLink;

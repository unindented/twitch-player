import PropTypes from "prop-types";
import React, { memo } from "react";
import ChannelPlayerFrame from "../../components/ChannelPlayerFrame";

const Channel = ({ match }) => {
  const { name } = match.params;

  return <ChannelPlayerFrame name={name} />;
};

Channel.propTypes = {
  match: PropTypes.object.isRequired,
  testID: PropTypes.string,
};

export default memo(Channel);

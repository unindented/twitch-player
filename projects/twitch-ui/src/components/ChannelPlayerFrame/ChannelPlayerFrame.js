import PropTypes from "prop-types";
import React, { memo } from "react";

const ChannelPlayerFrame = ({ name, testID = "channel-player" }) => {
  return (
    <iframe
      style={styles.root}
      src={`https://player.twitch.tv/?channel=${name}`}
      allowFullScreen={true}
      data-testid={testID}
    />
  );
};

ChannelPlayerFrame.propTypes = {
  name: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

const styles = {
  root: {
    border: 0,
    flex: 1,
  },
};

export default memo(ChannelPlayerFrame);

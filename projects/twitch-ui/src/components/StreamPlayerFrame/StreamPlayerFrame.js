import PropTypes from "prop-types";
import React, { memo } from "react";

const StreamPlayerFrame = memo(({ name, testID = "stream-player" }) => {
  return (
    <iframe
      style={styles.root}
      src={`https://player.twitch.tv/?channel=${name}`}
      allowFullScreen={true}
      data-testid={testID}
    />
  );
});

StreamPlayerFrame.propTypes = {
  name: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

const styles = {
  root: {
    border: 0,
    flex: 1,
  },
};

export default StreamPlayerFrame;

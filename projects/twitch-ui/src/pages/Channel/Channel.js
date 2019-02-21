import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import ChannelPlayerFrame from "../../components/ChannelPlayerFrame";

const Channel = ({ match, testID = "channel-page" }) => {
  const { name } = match.params;

  return (
    <View style={styles.root} testID={testID}>
      <ChannelPlayerFrame name={name} />
    </View>
  );
};

Channel.propTypes = {
  match: PropTypes.object.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default memo(Channel);

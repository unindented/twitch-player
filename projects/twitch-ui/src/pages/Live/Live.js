import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Live = memo(({ testID = "live-page" }) => (
  <View testID={testID}>
    <Heading level="2">Live Channels</Heading>
  </View>
));

export default Live;

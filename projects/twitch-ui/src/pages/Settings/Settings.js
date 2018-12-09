import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Settings = memo(({ testID = "settings-page" }) => (
  <View testID={testID}>
    <Heading level="2">Settings</Heading>
  </View>
));

export default Settings;

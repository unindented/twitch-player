import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Home = memo(({ testID = "home-page" }) => (
  <View testID={testID}>
    <Heading level="2">Home</Heading>
  </View>
));

export default Home;

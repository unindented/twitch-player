import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Categories = memo(({ testID = "categories-page" }) => (
  <View testID={testID}>
    <Heading level="2">Categories</Heading>
  </View>
));

export default Categories;

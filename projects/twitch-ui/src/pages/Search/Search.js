import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Search = memo(({ testID = "search-page" }) => (
  <View testID={testID}>
    <Heading level="2">Search</Heading>
  </View>
));

export default Search;

import PropTypes from "prop-types";
import React, { memo } from "react";
import { FlatList } from "react-native";

const HorizontalList = memo(
  ({ data, renderItem, testID = "horizontal-list" }) => {
    return (
      <FlatList
        data={data}
        horizontal={true}
        legacyImplementation={false}
        numColumns={1}
        refreshing={false}
        renderItem={renderItem}
        testID={testID}
      />
    );
  }
);

HorizontalList.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  testID: PropTypes.string,
};

export default HorizontalList;

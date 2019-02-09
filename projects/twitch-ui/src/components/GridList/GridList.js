import PropTypes from "prop-types";
import React, { memo } from "react";
import { FlatList } from "react-native";

const GridList = ({ data, numColumns, renderItem, testID = "grid-list" }) => {
  return (
    <FlatList
      data={data}
      horizontal={false}
      legacyImplementation={false}
      numColumns={numColumns}
      refreshing={false}
      renderItem={renderItem}
      testID={testID}
    />
  );
};

GridList.propTypes = {
  data: PropTypes.array.isRequired,
  numColumns: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  testID: PropTypes.string,
};

export default memo(GridList);

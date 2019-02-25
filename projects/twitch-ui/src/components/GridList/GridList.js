import PropTypes from "prop-types";
import React, { memo } from "react";
import { FlatList } from "react-native";
import { useDebug } from "../../hooks";

const GridList = ({
  data,
  getItemLayout,
  initialNumToRender,
  numColumns,
  renderItem,
  renderHeader,
  renderFooter,
  testID = "grid-list",
}) => {
  const [debug] = useDebug();

  return (
    <FlatList
      data={data}
      debug={debug}
      disableVirtualization={false}
      getItemLayout={getItemLayout}
      horizontal={false}
      initialNumToRender={initialNumToRender}
      legacyImplementation={false}
      numColumns={numColumns}
      refreshing={false}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      testID={testID}
    />
  );
};

GridList.propTypes = {
  data: PropTypes.array.isRequired,
  getItemLayout: PropTypes.func,
  initialNumToRender: PropTypes.number.isRequired,
  numColumns: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

export default memo(GridList);

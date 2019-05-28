import PropTypes from "prop-types";
import React, { forwardRef, memo } from "react";
import { FlatList } from "react-native";
import { useDebug } from "../../hooks";

const GridList = forwardRef(
  (
    {
      data,
      getItemLayout,
      initialNumToRender,
      numColumns,
      renderItem,
      renderHeader,
      renderFooter,
      testID = "grid-list",
    },
    ref
  ) => {
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
        ref={ref}
        refreshing={false}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        testID={testID}
      />
    );
  }
);

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

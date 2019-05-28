import PropTypes from "prop-types";
import React, { createElement, forwardRef, memo } from "react";
import { FlatList, View } from "react-native";
import { useDebug } from "../../hooks";

const HorizontalList = forwardRef(
  (
    {
      data,
      getItemLayout,
      initialNumToRender,
      renderItem,
      renderHeader,
      renderFooter,
      testID = "horizontal-list",
    },
    ref
  ) => {
    const [debug] = useDebug();

    return (
      <View testID={testID}>
        {renderHeader && createElement(renderHeader)}
        <FlatList
          data={data}
          debug={debug}
          disableVirtualization={false}
          getItemLayout={getItemLayout}
          horizontal={true}
          initialNumToRender={initialNumToRender}
          legacyImplementation={false}
          numColumns={1}
          ref={ref}
          refreshing={false}
          renderItem={renderItem}
        />
        {renderFooter && createElement(renderFooter)}
      </View>
    );
  }
);

HorizontalList.propTypes = {
  data: PropTypes.array.isRequired,
  getItemLayout: PropTypes.func,
  initialNumToRender: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

export default memo(HorizontalList);

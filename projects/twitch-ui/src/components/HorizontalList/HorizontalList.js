import PropTypes from "prop-types";
import React, { memo } from "react";
import { FlatList, View } from "react-native";
import { useTheme } from "../../hooks";

const ItemSeparatorComponent = memo(() => {
  const { layout } = useTheme();

  const rootStyle = {
    width: layout.gapMedium,
  };

  return <View style={rootStyle} />;
});

const HorizontalList = memo(
  ({ data, renderItem, testID = "horizontal-list" }) => {
    const { layout } = useTheme();

    const rootStyle = {
      marginBottom: layout.gapLarge,
    };

    return (
      <FlatList
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={data}
        horizontal={true}
        legacyImplementation={false}
        numColumns={1}
        refreshing={false}
        renderItem={renderItem}
        style={rootStyle}
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

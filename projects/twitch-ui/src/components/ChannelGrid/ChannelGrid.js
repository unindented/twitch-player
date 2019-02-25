import { ChannelType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useChannelGrid } from "../../hooks";
import ChannelItem from "../ChannelItem";
import GridList from "../GridList";

const ChannelGrid = ({
  list,
  renderHeader,
  renderFooter,
  testID = "channel-grid",
}) => {
  const {
    numColumns,
    numRows,
    imageWidth,
    imageHeight,
    getItemLayout,
    renderItemStyle,
  } = useChannelGrid(list.length);

  const renderItem = useCallback(
    ({ item, index }) => {
      const style = renderItemStyle(index);

      return (
        <View style={style}>
          <ChannelItem item={item} width={imageWidth} height={imageHeight} />
        </View>
      );
    },
    [imageWidth, imageHeight]
  );

  return (
    <View style={styles.root} testID={testID}>
      <GridList
        key={`${imageWidth}x${imageHeight}`}
        data={list}
        initialNumToRender={numRows}
        numColumns={numColumns}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        renderHeader={renderHeader}
        renderFooter={renderFooter}
      />
    </View>
  );
};

ChannelGrid.propTypes = {
  list: PropTypes.arrayOf(ChannelType).isRequired,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default memo(ChannelGrid);

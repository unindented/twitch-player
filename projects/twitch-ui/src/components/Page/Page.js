import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDimensions } from "../../hooks";
import { isSmallView } from "../../utils";
import Main from "../Main";
import Navigation from "../Navigation";

const Page = ({ children, testID = "page" }) => {
  const [dimensions, updateDimensions] = useDimensions("page");

  const layout = dimensions
    ? isSmallView(dimensions)
      ? "vertical"
      : "horizontal"
    : undefined;

  const rootStyle = [styles.root, styles[layout]];

  return (
    <View style={rootStyle} testID={testID} onLayout={updateDimensions}>
      {layout && (
        <>
          <Navigation />
          <Main>{children}</Main>
        </>
      )}
    </View>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  vertical: {
    flexDirection: "column",
  },
  horizontal: {
    flexDirection: "row",
  },
});

export default Page;

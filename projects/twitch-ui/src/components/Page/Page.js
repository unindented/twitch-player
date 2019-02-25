import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDimensions } from "../../hooks";
import { getMatchingQuerySize } from "../../utils";
import Main from "../Main";
import Navigation from "../Navigation";

const layoutQuery = {
  narrow: {
    maxWidth: 480,
  },
  wide: {
    minWidth: 481,
  },
};

const Page = ({ children, testID = "page" }) => {
  const [dimensions, updateDimensions] = useDimensions("page");

  const layout = dimensions && getMatchingQuerySize(layoutQuery, dimensions);

  const rootStyle = [styles.root, styles[layout || "narrow"]];

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
  narrow: {
    flexDirection: "column",
  },
  wide: {
    flexDirection: "row",
  },
});

export default Page;

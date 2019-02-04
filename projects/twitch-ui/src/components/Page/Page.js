import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useResponsiveLayout } from "../../hooks";
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
  const [layout, updateLayout] = useResponsiveLayout(layoutQuery);

  return (
    <View
      style={[styles.root, styles[layout || "narrow"]]}
      testID={testID}
      onLayout={updateLayout}
    >
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

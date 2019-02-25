import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Picker, StyleSheet, Text } from "react-native";

const CustomPicker = ({ values, style = [], ...props }) => {
  const [{ colors, typography }] = useTheme();

  const rootStyle = {
    fontSize: typography.sizeSecondary,
  };
  const pickerStyle = [
    styles.picker,
    {
      backgroundColor: colors.bodyBackground,
      borderColor: colors.border,
      color: colors.bodyText,
    },
  ].concat(style);

  const pickerItems = Object.keys(values).map(lng => (
    <Picker.Item key={lng} label={values[lng]} value={lng} />
  ));

  return (
    <Text style={rootStyle}>
      <Picker {...props} style={pickerStyle}>
        {pickerItems}
      </Picker>
    </Text>
  );
};

CustomPicker.propTypes = {
  values: PropTypes.object.isRequired,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  picker: {
    width: "100%",
  },
});

export default memo(CustomPicker);

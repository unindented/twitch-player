import { useTheme } from "@twitch-player/themes/dist/hooks";
import React, { memo } from "react";
import { Switch } from "react-native";

const CustomSwitch = ({ ...props }) => {
  const [{ colors }] = useTheme();

  return (
    <Switch
      {...props}
      thumbColor={colors.switchThumb}
      trackColor={colors.switchTrack}
      activeThumbColor={colors.switchActiveThumb}
      activeTrackColor={colors.switchActiveTrack}
    />
  );
};

export default memo(CustomSwitch);

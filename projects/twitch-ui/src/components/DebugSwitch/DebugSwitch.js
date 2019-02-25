import { useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useDebug } from "../../hooks";
import Switch from "../Switch";
import Text from "../Text";

const DebugSwitch = ({ testID = "debug-switch" }) => {
  const { t } = useTranslation();
  const [{ colors, typography }] = useTheme();
  const [debug, setDebug] = useDebug();

  const textStyle = {
    color: colors.bodyText,
    fontSize: typography.sizeSecondary,
  };

  return (
    <Text accessibilityRole="label" testID={testID}>
      <Text style={textStyle}>{t("pages.settings.debugHeading")}</Text>
      <Switch
        value={debug}
        testID={`${testID}-checkbox`}
        onValueChange={setDebug}
      />
    </Text>
  );
};

DebugSwitch.propTypes = {
  testID: PropTypes.string,
};

export default memo(DebugSwitch);

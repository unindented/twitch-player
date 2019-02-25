import { supportedLanguages, useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import Picker from "../Picker";
import Text from "../Text";

const LanguagePicker = ({ testID = "language-picker" }) => {
  const { i18n, t } = useTranslation();
  const [{ colors, typography }] = useTheme();

  const lng = i18n.languages.find(language =>
    supportedLanguages.hasOwnProperty(language)
  );

  const changeLanguage = useCallback(language => {
    i18n.changeLanguage(language);
  }, []);

  const textStyle = {
    color: colors.bodyText,
    fontSize: typography.sizeSecondary,
  };

  return (
    <Text accessibilityRole="label">
      <Text style={textStyle}>{t("pages.settings.languageHeading")}</Text>
      <Picker
        values={supportedLanguages}
        selectedValue={lng}
        testID={testID}
        onValueChange={changeLanguage}
      />
    </Text>
  );
};

LanguagePicker.propTypes = {
  testID: PropTypes.string,
};

export default memo(LanguagePicker);

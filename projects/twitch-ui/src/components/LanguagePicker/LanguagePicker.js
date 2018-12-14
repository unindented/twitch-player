import { supportedLanguages, useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import Picker from "../Picker";

const LanguagePicker = memo(({ testID = "language-picker" }) => {
  const [, i18n] = useTranslation();

  const lng = i18n.languages.find(language =>
    supportedLanguages.hasOwnProperty(language)
  );

  const changeLanguage = useCallback(language => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <Picker
      values={supportedLanguages}
      selectedValue={lng}
      testID={testID}
      onValueChange={changeLanguage}
    />
  );
});

LanguagePicker.propTypes = {
  testID: PropTypes.string,
};

export default LanguagePicker;

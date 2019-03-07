import { useTranslation } from "@twitch-player/i18n";
import { useKeyboard, useRouter } from "@twitch-player/ui/dist/hooks";
import { memo, useCallback } from "react";
import { useTizenKeys } from "../../hooks";

const tizenApplication = window.tizen && window.tizen.application;
const tizenInput = window.tizen && window.tizen.tvinputdevice;

const keys = [
  "ColorF0Red",
  "ColorF1Green",
  "ColorF2Yellow",
  "ColorF3Blue",
  "Back",
];
const keyCodes = tizenInput
  ? keys.reduce((acc, key) => {
      acc[key] = tizenInput.getKey(key).code;
      return acc;
    }, {})
  : {};

const KeyboardNavigation = () => {
  const { t } = useTranslation();
  const { history } = useRouter();

  const onKeyDown = useCallback(keyCode => {
    const { index } = history;

    switch (keyCode) {
      case keyCodes.ColorF0Red:
        history.push("/");
        break;
      case keyCodes.ColorF1Green:
        history.push("/channels");
        break;
      case keyCodes.ColorF2Yellow:
        history.push("/categories");
        break;
      case keyCodes.ColorF3Blue:
        history.push("/search");
        break;
      case keyCodes.Back:
        if (index > 0) {
          history.goBack();
        } else if (
          tizenApplication &&
          window.confirm(t("components.navigation.exitPrompt"))
        ) {
          tizenApplication.getCurrentApplication().exit();
        }
        break;
    }
  }, []);

  useTizenKeys(keys);
  useKeyboard(onKeyDown);

  return null;
};

export default memo(KeyboardNavigation);

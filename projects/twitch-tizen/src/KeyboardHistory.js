import { useKeyboard, useRouter } from "@twitch-player/ui/dist/hooks";
import { memo } from "react";

const onKeyDown = (history, keyCode) => {
  const { index } = history;

  switch (keyCode) {
    case 10009: // RETURN button
      if (index > 0) {
        history.goBack();
      } else if (window.confirm("Are you sure?")) {
        tizen.application.getCurrentApplication().exit();
      }
      break;
  }
};

const KeyboardHistory = () => {
  const { history } = useRouter();
  useKeyboard(keyCode => onKeyDown(history, keyCode));

  return null;
};

export default memo(KeyboardHistory);

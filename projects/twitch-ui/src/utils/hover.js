import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

let isEnabled = false;

// istanbul ignore else
if (canUseDOM) {
  /**
   * Web browsers emulate mouse events (and hover states) after touch events.
   * This code infers when the currently-in-use modality supports hover
   * (including for multi-modality devices) and considers "hover" to be enabled
   * if a mouse movement occurs more than 1 second after the last touch event.
   * This threshold is long enough to account for longer delays between the
   * browser firing touch and mouse events on low-powered devices.
   */
  const hoverThreshold = 1000;
  let lastTouchTimestamp = 0;

  const enableHover = () => {
    if (isEnabled || Date.now() - lastTouchTimestamp < hoverThreshold) {
      return;
    }
    isEnabled = true;
  };

  const disableHover = () => {
    lastTouchTimestamp = Date.now();
    isEnabled = false;
  };

  document.addEventListener("touchstart", disableHover, true);
  document.addEventListener("touchmove", disableHover, true);
  document.addEventListener("mousemove", enableHover, true);
}

export const isHoverEnabled = () => isEnabled;

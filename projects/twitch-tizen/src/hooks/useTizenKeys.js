import { useEffect } from "react";

const tizenInput = window.tizen && window.tizen.tvinputdevice;

const keysThatDoNotNeedRegistration = [
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "Enter",
  "Back",
];

const useTizenKeys = keys => {
  useEffect(() => {
    if (!tizenInput) {
      return;
    }

    const keysThatNeedRegistration = keys.filter(
      key => keysThatDoNotNeedRegistration.indexOf(key) === -1
    );

    if (tizenInput.registerKeyBatch) {
      tizenInput.registerKeyBatch(keysThatNeedRegistration);
    } else {
      keysThatNeedRegistration.forEach(key => {
        tizenInput.registerKey(key);
      });
    }
  }, [keys]);
};

export default useTizenKeys;

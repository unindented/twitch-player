import { useEffect } from "react";

const useKeyboard = onKeyDown => {
  const handleKeyDown = evt => {
    if (onKeyDown(evt.keyCode)) {
      evt.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useKeyboard;

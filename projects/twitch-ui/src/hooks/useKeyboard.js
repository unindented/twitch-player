import { useEffect } from "react";

const useKeyboard = onKeyDown => {
  const handleKeyDown = evt => {
    onKeyDown(evt.keyCode);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useKeyboard;

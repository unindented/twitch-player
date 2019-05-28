import { clamp } from "@twitch-player/utils";
import { useCallback, useRef } from "react";
import { useIntersectionObserverFocus, useKeyboard } from ".";

const useHorizontalListKeyboardNavigation = () => {
  const ref = useRef(null);
  const intersectionObserver = useIntersectionObserverFocus();

  const onKeyDown = useCallback(keyCode => {
    const currActiveNode = document.activeElement;

    if (currActiveNode == null || keyCode < 37 || keyCode > 40) {
      return;
    }

    const list = ref.current;
    const scrollableNode = list.getScrollableNode();
    const columnNodes = scrollableNode.querySelectorAll(
      "[data-focusable=true]"
    );
    const currActiveColumn = Array.prototype.indexOf.call(
      columnNodes,
      currActiveNode
    );

    if (currActiveColumn < 0) {
      return;
    }

    const columnChange = keyCode === 37 ? -1 : keyCode === 39 ? 1 : 0;
    const newActiveColumn = clamp(
      currActiveColumn + columnChange,
      0,
      columnNodes.length - 1
    );

    if (newActiveColumn === currActiveColumn) {
      return;
    }

    const newActiveNode = columnNodes[newActiveColumn];

    currActiveNode.blur();

    list.scrollToIndex({
      animated: true,
      viewPosition: 0.5,
      index: newActiveColumn,
    });

    intersectionObserver.observe(newActiveNode);

    return true;
  }, []);

  useKeyboard(onKeyDown);

  return ref;
};

export default useHorizontalListKeyboardNavigation;

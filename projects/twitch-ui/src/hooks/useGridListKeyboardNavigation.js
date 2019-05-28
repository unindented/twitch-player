import { clamp } from "@twitch-player/utils";
import { useCallback, useRef } from "react";
import { useIntersectionObserverFocus, useKeyboard } from ".";

const useGridListKeyboardNavigation = () => {
  const ref = useRef(null);
  const intersectionObserver = useIntersectionObserverFocus();

  const onKeyDown = useCallback(keyCode => {
    const currActiveNode = document.activeElement;

    if (currActiveNode == null || keyCode < 37 || keyCode > 40) {
      return;
    }

    const list = ref.current;
    const scrollableNode = list.getScrollableNode();
    const allNodes = scrollableNode.querySelectorAll("[data-focusable=true]");

    if (Array.prototype.indexOf.call(allNodes, currActiveNode) < 0) {
      return;
    }

    const rowNode = currActiveNode.parentNode.parentNode;
    const rowNodes = Array.prototype.slice.call(
      rowNode.parentNode.parentNode.childNodes,
      1
    );
    const columnNodes = rowNode.childNodes;
    const currActiveColumn = Array.prototype.indexOf.call(
      columnNodes,
      currActiveNode.parentNode
    );
    const currActiveRow = Array.prototype.indexOf.call(
      rowNodes,
      rowNode.parentNode
    );

    if (currActiveColumn < 0 || currActiveRow < 0) {
      return;
    }

    const columnChange = keyCode === 37 ? -1 : keyCode === 39 ? 1 : 0;
    const rowChange = keyCode === 38 ? -1 : keyCode === 40 ? 1 : 0;
    const newActiveColumn = clamp(
      currActiveColumn + columnChange,
      0,
      columnNodes.length - 1
    );
    const newActiveRow = clamp(
      currActiveRow + rowChange,
      0,
      rowNodes.length - 1
    );

    if (
      newActiveColumn === currActiveColumn &&
      newActiveRow === currActiveRow
    ) {
      return;
    }

    const newActiveNode =
      allNodes[newActiveColumn + newActiveRow * columnNodes.length];

    if (newActiveRow !== currActiveRow) {
      list.scrollToIndex({
        animated: true,
        viewPosition: 0.5,
        index: newActiveRow,
      });
    }

    intersectionObserver.observe(newActiveNode);

    return true;
  }, []);

  useKeyboard(onKeyDown);

  return ref;
};

export default useGridListKeyboardNavigation;

import PropTypes from "prop-types";
import { Children, cloneElement, useCallback, useState } from "react";
import { isHoverEnabled } from "../../utils";

const Highlightable = ({ children }) => {
  const [isFocused, setFocused] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isHoverable, setHoverable] = useState(true);

  const handleFocus = useCallback(() => {
    setFocused(true);
  });

  const handleBlur = useCallback(() => {
    setFocused(false);
  });

  const handleMouseEnter = useCallback(() => {
    if (isHoverEnabled()) {
      setHovered(true);
    }
  });

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  });

  // istanbul ignore next
  const handleGrant = useCallback(() => {
    setHoverable(false);
  });

  // istanbul ignore next
  const handleRelease = useCallback(() => {
    setHoverable(true);
  });

  const child = children(isFocused || (isHoverable && isHovered));

  return cloneElement(Children.only(child), {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onPressIn: handleGrant,
    onPressOut: handleRelease,
    onResponderGrant: handleGrant,
    onResponderRelease: handleRelease,
  });
};

Highlightable.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Highlightable;

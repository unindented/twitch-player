import PropTypes from "prop-types";
import { Children, Component, cloneElement } from "react";
import { isHoverEnabled } from "../../utils";

class Hoverable extends Component {
  constructor(props) {
    super(props);

    this.state = { isHovered: false, showHover: true };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleGrant = this._handleGrant.bind(this);
    this._handleRelease = this._handleRelease.bind(this);
  }

  render() {
    const { children } = this.props;
    const child = children(this.state.showHover && this.state.isHovered);

    return cloneElement(Children.only(child), {
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
      onPressIn: this._handleGrant,
      onPressOut: this._handleRelease,
      onResponderGrant: this._handleGrant,
      onResponderRelease: this._handleRelease,
    });
  }

  _handleMouseEnter() {
    if (isHoverEnabled() && !this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) {
        onHoverIn();
      }
      this.setState(state => ({ ...state, isHovered: true }));
    }
  }

  _handleMouseLeave() {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) {
        onHoverOut();
      }
      this.setState(state => ({ ...state, isHovered: false }));
    }
  }

  // istanbul ignore next
  _handleGrant() {
    this.setState(state => ({ ...state, showHover: false }));
  }

  // istanbul ignore next
  _handleRelease() {
    this.setState(state => ({ ...state, showHover: true }));
  }
}

Hoverable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  onHoverIn: PropTypes.func,
  onHoverOut: PropTypes.func,
};

export default Hoverable;

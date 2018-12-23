import PropTypes from "prop-types";
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { renderError, children } = this.props;

    return this.state.error ? renderError(this.state.error) : children;
  }
}

ErrorBoundary.propTypes = {
  renderError: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;

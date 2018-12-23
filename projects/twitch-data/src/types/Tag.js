import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  isLanguageTag: PropTypes.bool.isRequired,
  localizedName: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
});

import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.string,
  login: PropTypes.string,
  displayName: PropTypes.string,
  profileImageURL: PropTypes.string,
  broadcastSettings: PropTypes.shape({
    title: PropTypes.string,
  }),
});

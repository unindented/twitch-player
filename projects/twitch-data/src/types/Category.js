import PropTypes from "prop-types";
import TagType from "./Tag";

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  boxArtURL: PropTypes.string.isRequired,
  viewersCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(TagType),
});

import PropTypes from "prop-types";
import BroadcasterType from "./Broadcaster";
import GameType from "./Game";
import TagType from "./Tag";

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  previewImageURL: PropTypes.string.isRequired,
  viewersCount: PropTypes.number.isRequired,
  broadcaster: BroadcasterType.isRequired,
  game: GameType,
  tags: PropTypes.arrayOf(TagType).isRequired,
});

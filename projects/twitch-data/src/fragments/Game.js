import gql from "graphql-tag";
import TagFragment from "./Tag";

export default gql`
  fragment Game on Game {
    id
    key: id
    name
    boxArtURL
    viewersCount
    followersCount
  }
  ${TagFragment}
`;

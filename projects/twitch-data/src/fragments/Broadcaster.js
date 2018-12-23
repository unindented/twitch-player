import gql from "graphql-tag";

export default gql`
  fragment Broadcaster on User {
    id
    key: id
    login
    displayName
    profileImageURL(width: 150)
    broadcastSettings {
      title
    }
  }
`;

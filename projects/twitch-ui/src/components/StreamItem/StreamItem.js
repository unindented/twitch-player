import { StreamType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { View } from "react-native";
import { useTheme } from "../../hooks";
import Hoverable from "../Hoverable";
import InternalTouchableLink from "../InternalTouchableLink";
import StreamItemDetail from "./StreamItemDetail";
import StreamItemImage from "./StreamItemImage";

const StreamItem = ({
  item: {
    broadcaster: {
      login: broadcasterLogin,
      displayName: broadcasterName,
      profileImageURL: broadcasterImageURL,
      broadcastSettings: { title },
    },
    game,
    previewImageURL,
    viewersCount,
  },
  width: previewImageWidth,
  height: previewImageHeight,
  testID = "stream-item",
}) => {
  const { colors } = useTheme();

  return (
    <Hoverable>
      {isHover => {
        const wrapperStyle = {
          backgroundColor: isHover ? colors.itemBackgroundHover : "transparent",
        };

        return (
          <InternalTouchableLink
            href={`/channels/${broadcasterLogin}`}
            testID={testID}
          >
            <View style={wrapperStyle} testID={`${testID}-wrapper`}>
              <StreamItemImage
                url={previewImageURL}
                title={title}
                viewersCount={viewersCount}
                width={previewImageWidth}
                height={previewImageHeight}
                testID={`${testID}-image`}
              />
              <StreamItemDetail
                title={title}
                broadcasterName={broadcasterName}
                broadcasterImageURL={broadcasterImageURL}
                gameName={game && game.name}
                width={previewImageWidth}
                isHover={isHover}
                testID={`${testID}-detail`}
              />
            </View>
          </InternalTouchableLink>
        );
      }}
    </Hoverable>
  );
};

StreamItem.propTypes = {
  item: StreamType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

export default memo(StreamItem);

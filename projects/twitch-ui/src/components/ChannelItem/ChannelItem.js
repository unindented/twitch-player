import { ChannelType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { View } from "react-native";
import { useTheme } from "../../hooks";
import Hoverable from "../Hoverable";
import InternalTouchableLink from "../InternalTouchableLink";
import ChannelItemDetail from "./ChannelItemDetail";
import ChannelItemImage from "./ChannelItemImage";

const ChannelItem = ({
  item: {
    broadcaster: {
      login: broadcasterLogin,
      displayName: broadcasterName,
      profileImageURL: broadcasterImageURL,
      broadcastSettings: { title },
    },
    category,
    previewImageURL,
    viewersCount,
  },
  width: previewImageWidth,
  height: previewImageHeight,
  testID = "channel-item",
}) => {
  const { colors } = useTheme();

  const categoryName = category && category.name;

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
              <ChannelItemImage
                url={previewImageURL}
                title={title}
                viewersCount={viewersCount}
                width={previewImageWidth}
                height={previewImageHeight}
                testID={`${testID}-image`}
              />
              <ChannelItemDetail
                title={title}
                broadcasterName={broadcasterName}
                broadcasterImageURL={broadcasterImageURL}
                categoryName={categoryName}
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

ChannelItem.propTypes = {
  item: ChannelType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

export default memo(ChannelItem);

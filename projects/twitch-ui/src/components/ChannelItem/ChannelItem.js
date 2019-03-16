import { ChannelType } from "@twitch-player/data";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Highlightable from "../Highlightable";
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
  const [{ colors }] = useTheme();

  const categoryName = category && category.name;

  return (
    <Highlightable>
      {isHighlighted => {
        const activeStyle = {
          backgroundColor: colors.itemBackgroundHover,
        };
        const rootStyle = [
          styles.root,
          isHighlighted ? activeStyle : undefined,
        ];

        return (
          <InternalTouchableLink
            href={`/channels/${broadcasterLogin}`}
            style={rootStyle}
            activeStyle={activeStyle}
            testID={testID}
          >
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
              isHighlighted={isHighlighted}
              testID={`${testID}-detail`}
            />
          </InternalTouchableLink>
        );
      }}
    </Highlightable>
  );
};

ChannelItem.propTypes = {
  item: ChannelType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    display: "block",
    outlineStyle: "none",
  },
});

export default memo(ChannelItem);

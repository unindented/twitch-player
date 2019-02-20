import { GameType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { View } from "react-native";
import { useTheme } from "../../hooks";
import Hoverable from "../Hoverable";
import InternalTouchableLink from "../InternalTouchableLink";
import GameItemDetail from "./GameItemDetail";
import GameItemImage from "./GameItemImage";

const GameItem = ({
  item: { name, boxArtURL, viewersCount },
  width: boxArtWidth,
  height: boxArtHeight,
  testID = "game-item",
}) => {
  const { colors } = useTheme();

  return (
    <Hoverable>
      {isHover => {
        const wrapperStyle = {
          backgroundColor: isHover ? colors.itemBackgroundHover : "transparent",
        };

        return (
          <InternalTouchableLink href={`/categories/${name}`} testID={testID}>
            <View style={wrapperStyle} testID={`${testID}-wrapper`}>
              <GameItemImage
                url={boxArtURL}
                name={name}
                width={boxArtWidth}
                height={boxArtHeight}
                testID={`${testID}-image`}
              />
              <GameItemDetail
                name={name}
                viewersCount={viewersCount}
                width={boxArtWidth}
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

GameItem.propTypes = {
  item: GameType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

export default memo(GameItem);

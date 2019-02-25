import { memoize } from "@twitch-player/utils";
import { compareEdges, extractNodes } from "./shared";

const getEdgesForFeaturedChannels = data => data.channels;

const compareFeaturedChannels = compareEdges(getEdgesForFeaturedChannels);

export const extractFeaturedChannels = memoize(
  extractNodes(getEdgesForFeaturedChannels),
  compareFeaturedChannels
);

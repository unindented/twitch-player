import { memoize } from "@twitch-player/utils";
import { compareEdges, extractNodes } from "./shared";

const getEdgesForChannels = data => data.channels.edges;
const getEdgesForCategoryChannels = data => data.category.channels.edges;

const compareChannels = compareEdges(getEdgesForChannels);
const compareCategoryChannels = compareEdges(getEdgesForCategoryChannels);

const extractChannels = extractNodes(getEdgesForChannels);

const extractChannelsMap = {
  all: memoize(extractChannels, compareChannels),
  ps4: memoize(extractChannels, compareChannels),
  xbox: memoize(extractChannels, compareChannels),
};

export const extractChannelsForPlatformType = platformType =>
  extractChannelsMap[platformType];

export const extractChannelsForCategory = memoize(
  extractNodes(getEdgesForCategoryChannels),
  compareCategoryChannels
);

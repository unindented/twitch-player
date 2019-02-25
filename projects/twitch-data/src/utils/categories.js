import { memoize } from "@twitch-player/utils";
import { compareEdges, extractNodes } from "./shared";

const getEdgesForCategories = data => data.categories.edges;

const compareCategories = compareEdges(getEdgesForCategories);

export const extractCategories = memoize(
  extractNodes(getEdgesForCategories),
  compareCategories
);

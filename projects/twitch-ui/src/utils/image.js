import { Dimensions } from "react-native";

export const processImageTemplate = (template, width, height) => {
  const { scale } = Dimensions.get("window");
  return template
    .replace("{width}", Math.round(width * scale))
    .replace("{height}", Math.round(height * scale));
};

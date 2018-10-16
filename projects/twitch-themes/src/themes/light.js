import colors from "./colors/light";
import layout from "./layout/normal";
import typography from "./typography/normal";

export default {
  colors,
  layout,
  typography: {
    ...typography,
    family:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
  },
};

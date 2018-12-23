import colors from "./colors/dark";
import layout from "./layout/big";
import typography from "./typography/big";

export default {
  colors,
  layout,
  typography: {
    ...typography,
    family: "SamsungOne, sans-serif",
  },
};

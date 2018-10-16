import { ThemeContext } from "@twitch-player/themes/dist/context";
import { useContext } from "react";

const useTheme = () => useContext(ThemeContext);

export default useTheme;

import { useContext } from "react";
import { OverridesContext } from "../context";

const useOverrides = () => useContext(OverridesContext);

export default useOverrides;

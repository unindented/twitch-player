import { useContext } from "react";
import { __RouterContext as RouterContext } from "react-router";

const useRouter = () => useContext(RouterContext);

export default useRouter;

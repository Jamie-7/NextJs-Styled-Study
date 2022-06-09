import { createContext } from "react";

export const mainLayoutContextInit = {
  main: false,
};

export const MainLayoutContext = createContext(mainLayoutContextInit);

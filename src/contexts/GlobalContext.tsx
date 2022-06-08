import { createContext } from "react";

export const globalContextInit = {
  login: false,
};

export const GlobalContext = createContext(globalContextInit);

import { createContext } from "react";

export const globalContextInit = {
  loginState: false,
};

interface StateType {
  loginState: boolean;
}

const ActionEnum = {
  login: "login",
  logout: "logout",
} as const;
// type StatusType = "login" | "logout"
type ActionEnumType = typeof ActionEnum[keyof typeof ActionEnum];
interface ActionTyep {
  type: ActionEnumType;
  force?: boolean;
}

export const globalReducer = (state: StateType, action: ActionTyep) => {
  switch (action.type) {
    case "login":
      return { loginState: !state.loginState };
    case "logout":
      return { loginState: !state.loginState };
    default:
      throw new Error();
  }
};

export const GlobalContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionTyep>;
}>({
  state: globalContextInit,
  dispatch: () => undefined,
});

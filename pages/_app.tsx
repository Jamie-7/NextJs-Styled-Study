import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "@/style";
import { GlobalContext, globalContextInit, globalReducer } from "@/contexts";
import { useReducer } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(globalReducer, { loginState: false });
  console.log(state.loginState);
  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;

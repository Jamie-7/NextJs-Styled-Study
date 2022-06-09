import type { AppProps } from "next/app";
import { useReducer } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalContext, globalContextInit, globalReducer } from "@/contexts";
import { chakraTheme, GlobalStyle, theme } from "@/style";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(globalReducer, globalContextInit);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={chakraTheme}>
          <GlobalContext.Provider value={{ state, dispatch }}>
            <Component {...pageProps} />
          </GlobalContext.Provider>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

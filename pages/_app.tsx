import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "@/style";
import { GlobalContext, globalContextInit } from "@/contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={globalContextInit}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;

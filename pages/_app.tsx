import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { chakraTheme, GlobalStyle, theme } from "@/style";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

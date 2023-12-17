import "../styles/globals.css";
import type { AppProps } from "next/app";
import Main from "../components/layouts/Main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../themes/Theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;

import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/mulish";
import "@fontsource/mulish/900.css";
import "@fontsource/chivo";
import theme from "@/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

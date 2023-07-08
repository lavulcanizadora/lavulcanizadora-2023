import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      ".body-text": {
        b: {
          fontFamily: "'Mulish', sans-serif",
          fontWeight: "900",
          fontSize: "13px",
        },
      },
      p: {
        fontFamily: "'Chivo', sans-serif",
      },
      a: {
        color: "blue",
        textDecoration: "underline",
      },
      ".address-text": {
        p: {
          fontFamily: "'Chivo', sans-serif",
          color: "rgb(26, 32, 44)",
        },
        a: {
          textDecoration: "none",
          color: "black",
          color: "rgb(26, 32, 44)",
        },
      },
    },
  },
  fonts: {
    heading: "'Mulish', sans-serif",
    text: "'Chivo', sans-serif",
  },
});

export default theme;

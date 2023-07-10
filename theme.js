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
          color: "rgb(26, 32, 44)",
        },
      },
      ".address-text-homepage": {
        p: {
          fontFamily: "'Chivo', sans-serif",
          color: "white",
        },
        a: {
          textDecoration: "none",
          color: "white",
        },
      },
      ".background-image": {
        opacity: 0,
      },
      ".background-image-active": {
        opacity: 1,
      },
    },
  },
  fonts: {
    heading: "'Mulish', sans-serif",
    text: "'Chivo', sans-serif",
  },
});

export default theme;

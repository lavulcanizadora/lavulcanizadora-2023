import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      ".cover-video": {
        height: { base: "100%", md: "150%" },
        width: { base: "auto", md: "150%" },
        objectFit: "cover",
        position: "fixed",
        top: "50%",
        left: "50%",
        overflow: "hidden",
        transform: "translate(-50%, -50%)",
        visibility: "hidden",
        opacity: "0",
        zIndex: "-10",
      },
      ".cover-video-active": {
        height: { base: "100%", md: "150%" },
        width: { base: "auto", md: "150%" },
        objectFit: "cover",
        position: "fixed",
        top: "50%",
        left: "50%",
        overflow: "hidden",
        transform: "translate(-50%, -50%)",
        visibility: "visible",
        opacity: "1",
        filter: "brightness(50%)",
        zIndex: "-10",
      },
      ".body-text": {
        b: {
          fontFamily: "'Mulish', sans-serif",
          fontWeight: "900",
          fontSize: "13px",
        },
      },
      ".body-text-homepage": {
        p: {
          fontSize: "18px",
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
          width: { md: "300px" },
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
          width: { md: "300px" },
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

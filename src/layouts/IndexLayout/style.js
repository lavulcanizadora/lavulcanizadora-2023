const style = {
  mainContainer: {
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: "80px",
  },
  logo: {
    opacity: "0.7",
    _hover: {
      opacity: "1",
    },
    width: { base: "280px", md: "350px", lg: "425px" },
  },
  languageMenu: {
    gap: "10px",
  },
  languageLink: {
    cursor: "pointer",
    opacity: "0.7",
    fontSize: "27px",
    _hover: {
      opacity: "1",
    },
    color: "#FFF",
  },
  languageHeading: {
    opacity: "0.7",
    fontSize: "27px",
    color: "#FFF",
  },
  socialIcons: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    justifyContent: { base: "center", md: "flex-start" },
    padding: "15px 30px",
  },
};

export default style;

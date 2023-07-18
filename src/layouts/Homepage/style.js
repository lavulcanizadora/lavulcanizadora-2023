const style = {
  mainContainer: {
    flexDirection: { base: "column", md: "row" },
    padding: { md: "60px" },
    alignItems: { md: "flex-start" },
    gap: { md: "50px" },
    justifyContent: { md: "space-between" },
    height: "100vh",
  },
  homeContainer: {
    height: { base: "auto", md: "100%" },
    width: { base: "auto", md: "100%" },
    flexDirection: "column",
    justifyContent: { base: "center", md: "space-between" },
    margin: { base: "48px", md: "0" },
    paddingBottom: { base: "32px", md: 0 },
  },
  homeText: {
    flexDirection: "column",
    gap: "16px",
    maxWidth: "700px",
    color: "white",
  },
  backgroundImage: {
    position: "fixed",
    zIndex: "-10",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    transform: "translate(-50%, -50%)",
    transition: "opacity 2s ease",
    height: { base: "100%", md: "150%" },
    width: { base: "auto", md: "150%" },
    objectFit: "cover",
    filter: "brightness(50%)",
  },
  backgroundColorBlack: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    overflow: "hidden",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-20",
  },
};

export default style;

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
    justifyContent: "center",
    margin: { base: "48px", md: "0" },
  },
  homeText: {
    flexDirection: "column",
    gap: "16px",
    maxWidth: "700px",
  },
};

export default style;

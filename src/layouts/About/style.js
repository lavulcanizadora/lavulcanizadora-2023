const style = {
  mainContainer: {
    flexDirection: { base: "column", md: "row" },
    padding: { md: "60px" },
    alignItems: { md: "flex-start" },
    gap: { md: "50px" },
    justifyContent: { md: "space-between" },
    height: "100vh",
  },
  biosContainer: {
    flexDirection: "column",
    justifyContent: { md: "space-between" },
    marginBottom: { base: "26px", lg: "62px" },
    marginLeft: { base: "5px", md: "0" },
    marginRight: { base: "5px", md: "0" },
    width: "100%",
    height: "100%",
  },
  insideBiosContainer: {
    gap: "16px",
    flexDirection: "column",
  },
};

export default style;

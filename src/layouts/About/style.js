const style = {
  mainContainer: {
    flexDirection: { base: "column", md: "row" },
    padding: { md: "60px" },
    alignItems: { md: "flex-start" },
    gap: { md: "50px" },
    justifyContent: { md: "space-between" },
  },
  biosContainer: {
    flexDirection: { base: "column", md: "row" },
    flexWrap: "wrap",
    marginBottom: { base: "26px", lg: "62px" },
    marginLeft: { base: "5px", md: "0" },
    marginRight: { base: "5px", md: "0" },
    gap: { base: "38px", md: "15px", lg: "30px"},
  },
  email: {
    fontSize: { base: "16px", md: "28px" },
  },
};

export default style;

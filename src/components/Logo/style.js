const style = {
  container: {
    padding: { base: "54px 108px", md: 0 },
    minWidth: { md: "150px", lg: "250px" },
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    filter: "invert(1)",
    opacity: { md: "0.7" },
    _hover: {
      opacity: { md: "1" },
    },
    maxWidth: { base: "250px", md: "150px", lg: "250px" },
    cursor: "pointer",
  },
  logoInvert: {
    filter: "invert(0)",
    opacity: { md: "0.7" },
    _hover: {
      opacity: { md: "1" },
    },
    maxWidth: { base: "250px", md: "150px", lg: "250px" },
    cursor: "pointer",
  },
};

export default style;

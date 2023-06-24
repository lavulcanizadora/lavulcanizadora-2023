const style = {
  projectContainer: {
    width: { base: "100%", md: "45%" },
    height: { base: "calc((100vw - 10px) * 0.6)", md: "35vh" },
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundSize: "110%",
    transition: "0.4s",
    cursor: "pointer",
    _hover: {
      backgroundSize: "100%",
      opacity: "0.8",
    },
  },
  projectHeading: {
    textTransform: "lowercase",
    fontSize: { base: "10px", md: "16px" },
    color: "rgb(255, 255, 255, 0.6)",
    fontWeight: "600",
  },
};

export default style;

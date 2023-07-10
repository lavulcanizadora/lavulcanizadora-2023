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
};

export default style;

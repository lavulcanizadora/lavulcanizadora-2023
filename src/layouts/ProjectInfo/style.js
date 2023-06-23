const style = {
  mainContainer: {
    flexDirection: { base: "column", md: "row" },
    padding: { md: "32px 72px" },
    alignItems: { md: "flex-start" },
    gap: { md: "50px" },
    justifyContent: { md: "space-around" },
  },
  infoContainer: {
    flexDirection: "column",
    marginBottom: "62px",
  },
  headingsContainer: {
    marginBottom: "24px",
    maxWidth: { md: "250px" },
  },
  infoSpecsContainer: {
    flexDirection: "column",
    padding: { base: "12px 16px", md: "0" },
    marginTop: { md: "48px" },
  },
  projectHeading: {
    textTransform: "uppercase",
    fontSize: { base: "24px", md: "28px" },
    fontWeight: "900",
  },
  projectMedium: {
    fontSize: { base: "14px", md: "16px" },
    textTransform: "uppercase",
  },
  projectSpecs: {
    fontSize: { base: "14px", md: "16px" },
    color: "rgb(76, 76, 76)",
    flexDirection: "column",
    marginBottom: "40px",
    gap: { base: "14px", md: "16px" },
    maxWidth: { lg: "250px" },
  },
  projectDescription: {
    flexDirection: "column",
    fontSize: { base: "16px", md: "18px" },
    gap: { base: "16px", md: "18px" },
    marginLeft: { lg: "250px" },
  },
};

export default style;

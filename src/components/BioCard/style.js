const style = {
  accordionItem: {
    border: "none",
  },
  accordionButton: {
    _hover: {
      backgroundColor: "none",
    },
    paddingTop: 0,
    paddingBottom: 0,
  },
  accordionPanel: {
    display: "flex",
    flexDirection: { base: "column", md: "row" },
    alignItems: "flex-start",
    gap: { base: "13px", md: "6px" },
  },
  bioImg: {
    width: { md: "250px", lg: "350px"},
    boxSizing: "border-box",
    paddingRight: { md: "16px" },
  },
  accordionIcon: {
    width: 8,
    height: 8,
  },
  nameTitleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: { base: "100%", md: "350px" },
  },
  cardName: {
    fontSize: { base: "25px", md: "22px", lg: "28px" },
    fontWeight: "900",
    textTransform: "uppercase",
  },
  cardTitle: {
    fontSize: { base: "14px", md: "15px" },
    fontWeight: "700",
    textTransform: "uppercase",
  },
  cardContentContainer: {
    flexDirection: "column",
    gap: "13px",
  },
  bioContainer: {
    flexDirection: "column",
    gap: "16px",
  },
};

export default style;

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
    width: { md: "250px", lg: "350px" },
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
    _hover: {
      opacity: 0.7,
    },
  },
  cardName: {
    fontSize: { base: "25px", md: "22px", lg: "28px" },
    fontWeight: "900",
    fontFamily: "'Mulish', sans-serif",
    fontSize: "18px",
  },
  cardTitle: {
    fontSize: { base: "14px", md: "15px" },
    fontWeight: "500",
    fontFamily: "'Mulish', sans-serif",
    fontSize: "16px",
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

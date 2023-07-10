const style = {
  menuButton: {
    background: "none",
    position: "fixed",
    zIndex: "1",
    padding: "35px 25px",
    opacity: 0.7,
    _hover: {
      opacity: 1,
    },
    _active: {
      backgroundColor: "none",
    },
  },
  modalCloseButton: {
    position: "relative",
    fontSize: "24px",
    top: 0,
    right: 0,
    padding: "45px 40px",
  },
  modalContent: {
    backgroundColor: "rgb(255, 255, 255, 0.7)",
    justifyContent: "space-between",
  },
  menuPagesList: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60vh",
  },
  menuLink: {
    fontSize: "24px",
    textTransform: "uppercase",
    fontWeight: "700",
    cursor: "pointer",
  },
  iconsMenuMobile: {
    justifyContent: "center",
    paddingBottom: "25px",
  },
};

export default style;

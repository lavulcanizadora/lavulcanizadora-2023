const styles = {
  iconsContainer: {
    gap: { base: "20px", md: "10px" },
  },
  icon: {
    cursor: "pointer",
    width: { base: "20px", md: "18px" },
    height: { base: "20px", md: "18px" },
    opacity: { md: "0.7" },
    _hover: {
      opacity: {
        md: "1",
      },
    },
  },
  iconInvert: {
    cursor: "pointer",
    width: { base: "20px", md: "18px" },
    height: { base: "20px", md: "18px" },
    opacity: "0.7",
    _hover: {
      opacity: {
        md: "1",
      },
    },
    color: "white",
  },
};

export default styles;

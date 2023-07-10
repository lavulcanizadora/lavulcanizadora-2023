import React from "react";
import PropTypes from "prop-types";

const MobileMenuIcon = ({ isHomepage }) => {
  const iconColor = isHomepage ? "#FFF" : "#000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.79 10.25"
      width={"30px"}
      height={"20px"}
    >
      <polyline
        points="14.79 9.25 11.56 6.89 13.93 3.66 10.7 1.3 5.38 8.55 4.58 7.96 1.75 5.89 3.82 3.07 1 1"
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
          fill: "none",
          stroke: iconColor,
        }}
      ></polyline>
    </svg>
  );
};

MobileMenuIcon.propTypes = {
  isHomepage: PropTypes.bool,
};

export default MobileMenuIcon;

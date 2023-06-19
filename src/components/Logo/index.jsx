import React from "react";
import PropTypes from "prop-types";
import { Flex, Image } from "@chakra-ui/react";
import style from "./style.js";

const Logo = ({ logoUrl }) => {
  return (
    <Flex {...style.container}>
      <Image src={logoUrl} alt="Logo La Vulcanizadora" />
    </Flex>
  );
};

Logo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
};

export default Logo;

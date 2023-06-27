import React from "react";
import PropTypes from "prop-types";
import { Flex, Image } from "@chakra-ui/react";
import style from "./style.js";
import Link from "next/link.js";

const Logo = ({ logoUrl }) => {
  return (
    <Flex {...style.container}>
      <Link href="/home" passHref legacyBehavior>
        <Image src={logoUrl} alt="Logo La Vulcanizadora" {...style.logo} />
      </Link>
    </Flex>
  );
};

Logo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
};

export default Logo;

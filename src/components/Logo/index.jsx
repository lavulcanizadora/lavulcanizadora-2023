import React from "react";
import PropTypes from "prop-types";
import { Flex, Image, Hide } from "@chakra-ui/react";
import style from "./style.js";
import Link from "next/link.js";
import AddressParagraph from "../AddressParagraph/index.jsx";

const Logo = ({ logoUrl, address, isHomepage }) => {
  return (
    <Flex {...style.container}>
      <Link href="/home" passHref legacyBehavior>
        {isHomepage ? (
          <Image src={logoUrl} alt="Logo La Vulcanizadora" {...style.logoInvert} />
        ) : (
          <Image src={logoUrl} alt="Logo La Vulcanizadora" {...style.logo} />
        )}
      </Link>
      <Hide below="md">
        <AddressParagraph isHomepage={isHomepage} address={address} />
      </Hide>
    </Flex>
  );
};

Logo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  isHomepage: PropTypes.bool,
};

export default Logo;

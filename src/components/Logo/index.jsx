import React from "react";
import PropTypes from "prop-types";
import { Flex, Image, Hide } from "@chakra-ui/react";
import style from "./style.js";
import Link from "next/link.js";

const Logo = ({ logoUrl, isHomepage, isProjectInfo }) => {

  return (
    <Flex {...style.container}>
      <Link href={isProjectInfo ? "/projects" : "/home"} passHref legacyBehavior>
        {isHomepage ? (
          <Image
            src={logoUrl}
            alt="Logo La Vulcanizadora"
            {...style.logoInvert}
          />
        ) : (
          <Image src={logoUrl} alt="Logo La Vulcanizadora" {...style.logo} />
        )}
      </Link>
    </Flex>
  );
};

Logo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  isHomepage: PropTypes.bool,
  isProjectInfo: PropTypes.bool
};

export default Logo;

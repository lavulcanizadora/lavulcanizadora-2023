import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";
import style from "./style";
import { useRouter } from "next/router";

const LanguageToggle = ({ isHomepage }) => {
  const router = useRouter();

  return isHomepage ? (
    <Link
      href={router.asPath}
      locale={router.locale === "en" ? "es" : "en"}
      passHref
      legacyBehavior
    >
      <Heading {...style.menuLinkInvert}>
        {router.locale === "en" ? "Español" : "English"}
      </Heading>
    </Link>
  ) : (
    <Link
      href={router.asPath}
      locale={router.locale === "en" ? "es" : "en"}
      passHref
      legacyBehavior
    >
      <Heading {...style.menuLink}>
        {router.locale === "en" ? "Español" : "English"}
      </Heading>
    </Link>
  );
};

LanguageToggle.propTypes = {
  isHomepage: PropTypes.bool,
};

export default LanguageToggle;

import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SocialMediaIcons from "../SocialMediaIcons";
import style from "./style";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

const DesktopMenu = ({ isHomepage }) => {
  const router = useRouter();

  return isHomepage ? (
    <Flex {...style.desktopMenuContainerInvert}>
      <SocialMediaIcons isHomepage />
      <Link href="/projects" passHref legacyBehavior>
        <Heading {...style.menuLinkInvert}>
          {router.locale === "en" ? "Projects" : "Proyectos"}
        </Heading>
      </Link>
      <Link href="/about" passHref legacyBehavior>
        <Heading {...style.menuLinkInvert}>
          {router.locale === "en" ? "About" : "Nosotros"}
        </Heading>
      </Link>
      <Link href="/news" passHref legacyBehavior>
        <Heading {...style.menuLinkInvert}>
          {router.locale === "en" ? "News" : "Noticias"}
        </Heading>
      </Link>
    </Flex>
  ) : (
    <Flex {...style.desktopMenuContainer}>
      <SocialMediaIcons />
      <Link href="/projects" passHref legacyBehavior>
        <Heading {...style.menuLink}>
          {router.locale === "en" ? "Projects" : "Proyectos"}
        </Heading>
      </Link>
      <Link href="/about" passHref legacyBehavior>
        <Heading {...style.menuLink}>
          {router.locale === "en" ? "About" : "Nosotros"}
        </Heading>
      </Link>
      <Link href="/news" passHref legacyBehavior>
        <Heading {...style.menuLink}>
          {router.locale === "en" ? "News" : "Noticias"}
        </Heading>
      </Link>
    </Flex>
  );
};

DesktopMenu.propTypes = {
  isHomepage: PropTypes.bool,
};

export default DesktopMenu;

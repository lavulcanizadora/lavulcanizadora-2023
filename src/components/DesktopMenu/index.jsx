import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SocialMediaIcons from "../SocialMediaIcons";
import style from "./style";
import { useRouter } from "next/router";
import Link from "next/link";

const DesktopMenu = () => {
  const router = useRouter();

  return (
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

export default DesktopMenu;

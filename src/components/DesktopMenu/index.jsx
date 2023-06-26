import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SocialMediaIcons from "../SocialMediaIcons";
import style from './style';
import { useRouter } from "next/router";

const DesktopMenu = () => {

  const router = useRouter();

  return (
    <Flex {...style.desktopMenuContainer}>
      <SocialMediaIcons />
      <Heading {...style.menuLink}>
        {router.locale === "en" ? "Projects" : "Proyectos"}
      </Heading>
      <Heading {...style.menuLink}>
        {router.locale === "en" ? "About" : "Nosotros"}
      </Heading>
      <Heading {...style.menuLink}>
        {router.locale === "en" ? "News" : "Noticias"}
      </Heading>
    </Flex>
  );
};

export default DesktopMenu;

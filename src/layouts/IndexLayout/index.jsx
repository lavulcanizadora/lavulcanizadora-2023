import React from "react";
import PropTypes from "prop-types";
import style from "./style";
import { Flex, Heading, Image } from "@chakra-ui/react";
import SocialMediaIcons from "@/src/components/SocialMediaIcons";
import Link from "next/link";
import Head from "next/head";

const IndexLayout = ({ logoUrl }) => {
  return (
    <>
      <Head>
        <title>La Vulcanizadora</title>
      </Head>
      <Flex {...style.mainContainer}>
        <Flex {...style.menuContainer}>
          <Image src={logoUrl} alt="Logo La Vulcanizadora" {...style.logo} />
          <Flex {...style.languageMenu}>
            <Link href="/home" locale="es" passHref legacyBehavior>
              <Heading {...style.languageLink}>ES</Heading>
            </Link>
            <Heading {...style.languageHeading}>/</Heading>
            <Link href="/home" locale="en" passHref legacyBehavior>
              <Heading {...style.languageLink}>EN</Heading>
            </Link>
          </Flex>
        </Flex>
        <Flex {...style.socialIcons}>
          <SocialMediaIcons />
        </Flex>
      </Flex>
    </>
  );
};

IndexLayout.propTypes = {
  logoUrl: PropTypes.string.isRequired,
};

export default IndexLayout;

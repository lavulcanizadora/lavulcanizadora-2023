import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Hide } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";

const News = ({ logoUrl, news }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${
          router.locale === "en" ? "About" : "Nosotros"
        } | La Vulcanizadora`}</title>
      </Head>
      <Hide above="md">
        <MobileMenu />
      </Hide>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} />
        <Flex {...style.biosContainer}></Flex>
      </Flex>
      <DesktopMenu />
    </>
  );
};

News.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  news: PropTypes.array.isRequired,
};

export default News;

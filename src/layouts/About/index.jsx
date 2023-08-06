import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Show } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import BioCard from "@/src/components/BioCard";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import AddressParagraph from "@/src/components/AddressParagraph";
import LanguageToggle from "@/src/components/LanguageToggle";

const ProjectList = ({ logoUrl, bios, globalContent }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${router.locale === "en" ? "About" : "Nosotros"} | ${
          globalContent.pageTitle
        }`}</title>
        <meta name="description" content={globalContent.pageDescription} />
      </Head>
      <Show below="md">
        <MobileMenu />
      </Show>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} address={globalContent.address} />
        <Flex {...style.biosContainer}>
          <Flex {...style.insideBiosContainer}>
            {bios.map((bio) => (
              <BioCard key={bio.fields.name} bioInfo={bio} />
            ))}
          </Flex>
          <AddressParagraph address={globalContent.address} />
        </Flex>
      </Flex>
      <Show above="md">
        <LanguageToggle />
        <DesktopMenu />
      </Show>
    </>
  );
};

ProjectList.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  bios: PropTypes.array.isRequired,
  globalContent: PropTypes.object.isRequired,
};

export default ProjectList;

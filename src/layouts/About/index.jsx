import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Heading, Hide } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import BioCard from "@/src/components/BioCard";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import AddressParagraph from "@/src/components/AddressParagraph";

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
      <Hide above="md">
        <MobileMenu />
      </Hide>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} address={globalContent.address} />
        <Flex {...style.biosContainer}>
          {bios.map((bio) => (
            <BioCard key={bio.fields.name} bioInfo={bio} />
          ))}
          <AddressParagraph address={globalContent.address} />
        </Flex>
      </Flex>
      <Hide below="md">
        <DesktopMenu />
      </Hide>
    </>
  );
};

ProjectList.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  bios: PropTypes.array.isRequired,
  globalContent: PropTypes.object.isRequired,
};

export default ProjectList;

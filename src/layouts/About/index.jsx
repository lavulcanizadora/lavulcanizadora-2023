import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Heading } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import BioCard from "@/src/components/BioCard";

const ProjectList = ({ logoUrl, bios }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${
          router.locale === "en" ? "About" : "Nosotros"
        } | La Vulcanizadora`}</title>
      </Head>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} />
        <Flex {...style.biosContainer}>
          {bios.map((bio) => (
            <BioCard key={bio.name} bioInfo={bio} />
          ))}
          <Heading {...style.email}>lavulcanizadoraco@gmail.com</Heading>
        </Flex>
      </Flex>
    </>
  );
};

ProjectList.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  bios: PropTypes.array.isRequired,
};

export default ProjectList;

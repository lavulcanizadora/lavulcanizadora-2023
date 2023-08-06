import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Show } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import ProjectCover from "@/src/components/ProjectCover";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import AddressParagraph from "@/src/components/AddressParagraph";
import LanguageToggle from "@/src/components/LanguageToggle";

const ProjectList = ({ logoUrl, projectList, globalContent }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${router.locale === "en" ? "Projects" : "Proyectos"} | ${
          globalContent.pageTitle
        }`}</title>
        <meta name="description" content={globalContent.pageDescription} />
      </Head>
      <Show below="md">
        <MobileMenu />
      </Show>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} address={globalContent.address} />
        <Flex {...style.listContainer}>
          {projectList.map((project) => (
            <ProjectCover key={project.fields.title} projectInfo={project} />
          ))}
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
  projectList: PropTypes.array.isRequired,
  globalContent: PropTypes.object.isRequired,
};

export default ProjectList;

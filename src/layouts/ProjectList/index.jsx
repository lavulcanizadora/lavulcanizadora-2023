import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Hide } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import ProjectCover from "@/src/components/ProjectCover";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";

const ProjectList = ({ logoUrl, projectList }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${
          router.locale === "en" ? "Projects" : "Proyectos"
        } | La Vulcanizadora`}</title>
      </Head>
      <Hide above="md">
        <MobileMenu />
      </Hide>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} />
        <Flex {...style.listContainer}>
          {projectList.map((project) => (
            <ProjectCover key={project.projectName} projectInfo={project} />
          ))}
        </Flex>
      </Flex>
      <DesktopMenu />
    </>
  );
};

ProjectList.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  projectList: PropTypes.array.isRequired,
};

export default ProjectList;

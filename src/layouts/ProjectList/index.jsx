import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import ProjectCover from "@/src/components/ProjectCover";

const ProjectList = ({ logoUrl, projectList }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${
          router.locale === "en" ? "Projects" : "Proyectos"
        } | La Vulcanizadora`}</title>
      </Head>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} />
        <Flex {...style.listContainer}>
          {projectList.map((project) => (
            <ProjectCover key={project.projectName} projectInfo={project} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

ProjectList.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  projectList: PropTypes.array.isRequired,
};

export default ProjectList;

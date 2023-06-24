import React from "react";
import PropTypes from "prop-types";
import style from "./style";
import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";


const ProjectCover = ({ projectInfo }) => {
  return (
    <Link
      href={"/projects/" + projectInfo.projectSlug}
      legacyBehavior
      passHref
    >
      <Flex
        {...style.projectContainer}
        backgroundImage={`url(${projectInfo.projectCover})`}
      >
        <Heading {...style.projectHeading}>{projectInfo.projectName}</Heading>
      </Flex>
    </Link>
  );
};

ProjectCover.propTypes = {
  projectInfo: PropTypes.object.isRequired,
};

export default ProjectCover;

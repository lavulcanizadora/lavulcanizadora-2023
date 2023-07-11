import React from "react";
import PropTypes from "prop-types";
import style from "./style";
import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const ProjectCover = ({ projectInfo }) => {
  return (
    <Link href={"/projects/" + projectInfo.fields.slug} legacyBehavior passHref>
      <Flex
        {...style.projectContainer}
        backgroundImage={`url(${projectInfo.fields.coverPhoto.fields.file.url})`}
      >
        <Heading as="h2" {...style.projectHeading}>
          {projectInfo.fields.title}
        </Heading>
      </Flex>
    </Link>
  );
};

ProjectCover.propTypes = {
  projectInfo: PropTypes.object.isRequired,
};

export default ProjectCover;

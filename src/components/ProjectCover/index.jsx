import React from "react";
import PropTypes from "prop-types";
import style from "./style";
import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const ProjectCover = ({ projectInfo }) => {
  return (
    <Link href={"/" + projectInfo.projectSlug}>
      <Flex>
        <Heading>{projectInfo.projectName}</Heading>
      </Flex>
    </Link>
  );
};

ProjectCover.propTypes = {};

export default ProjectCover;

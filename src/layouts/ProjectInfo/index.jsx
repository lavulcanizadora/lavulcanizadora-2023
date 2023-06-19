import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

const ProjectInfo = ({ logoUrl, projectInfo }) => {
  return (
    <Flex>
      <Logo logoUrl={logoUrl} />
      <Flex></Flex>
    </Flex>
  );
};

ProjectInfo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  projectInfo: PropTypes.object.isRequired,
};

export default ProjectInfo;

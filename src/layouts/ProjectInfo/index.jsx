import React from "react";
import Logo from "@/src/components/Logo";
import Carousel from "@/src/components/Carousel";
import PropTypes from "prop-types";
import { Flex, Heading, Text } from "@chakra-ui/react";
import style from "./style";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectInfo = ({ logoUrl, projectInfo }) => {
  console.log(projectInfo);

  return (
    <Flex {...style.mainContainer}>
      <Logo logoUrl={logoUrl} />
      <Flex {...style.infoContainer}>
        <Carousel carouselSlides={projectInfo.carousel} />
        <Flex {...style.infoSpecsContainer}>
          <Heading>{projectInfo.title}</Heading>
          <Heading>{projectInfo.medium}</Heading>
          <Text>{projectInfo.specs}</Text>
          <Flex flexDirection={"column"}>
            {documentToReactComponents(projectInfo.description, {
              renderText: (text) => {
                return text
                  .split("\n")
                  .reduce((children, textSegment, index) => {
                    return [
                      ...children,
                      index > 0 && <br key={index} />,
                      textSegment,
                    ];
                  }, []);
              },
            })}
          </Flex>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};

ProjectInfo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  projectInfo: PropTypes.object.isRequired,
};

export default ProjectInfo;

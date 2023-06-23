import React from "react";
import Logo from "@/src/components/Logo";
import Carousel from "@/src/components/Carousel";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import style from "./style";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";

const ProjectInfo = ({ logoUrl, projectInfo }) => {
  console.log(projectInfo);

  return (
    <>
    <Head>
      <title>{projectInfo.title} | La Vulcanizadora</title>
    </Head>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} />
        <Flex {...style.infoContainer}>
          <Carousel carouselSlides={projectInfo.carousel} />
          <Flex {...style.infoSpecsContainer}>
            <Box {...style.headingsContainer}>
              <Heading {...style.projectHeading}>{projectInfo.title}</Heading>
              <Heading {...style.projectMedium} as="h2">
                {projectInfo.medium}
              </Heading>
            </Box>
            <Flex {...style.projectSpecs}>
              {documentToReactComponents(projectInfo.specs, {
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
            <Flex {...style.projectDescription} className="project-description">
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
        </Flex>
      </Flex>
    </>
  );
};

ProjectInfo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  projectInfo: PropTypes.object.isRequired,
};

export default ProjectInfo;

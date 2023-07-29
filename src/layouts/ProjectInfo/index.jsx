import React from "react";
import Logo from "@/src/components/Logo";
import Carousel from "@/src/components/Carousel";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Hide } from "@chakra-ui/react";
import style from "./style";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import AddressParagraph from "@/src/components/AddressParagraph";
import LanguageToggle from "@/src/components/LanguageToggle";

const ProjectInfo = ({ logoUrl, projectInfo, globalContent }) => {
  return (
    <>
      <Head>
        <title>{`${projectInfo.title} | ${globalContent.pageTitle}`}</title>
        <meta name="description" content={globalContent.pageDescription} />
      </Head>
      <Hide above="md">
        <MobileMenu />
      </Hide>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} address={globalContent.address} />
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
            <Flex {...style.projectDescription} className="body-text">
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
          <AddressParagraph address={globalContent.address} />
        </Flex>
      </Flex>
      <Hide below="md">
        <LanguageToggle />
        <DesktopMenu />
      </Hide>
    </>
  );
};

ProjectInfo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  projectInfo: PropTypes.object.isRequired,
  globalContent: PropTypes.object.isRequired,
};

export default ProjectInfo;

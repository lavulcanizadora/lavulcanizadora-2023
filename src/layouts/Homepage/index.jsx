import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Heading, Hide } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Homepage = ({ logoUrl, homeInfo }) => {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>La Vulcanizadora</title>
      </Head>
      <Hide above="md">
        <MobileMenu />
      </Hide>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} />
        <Flex {...style.homeContainer}>
          <Flex {...style.homeText} className="body-text">
            {documentToReactComponents(homeInfo.paragraph, {
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
      <Hide below="md">
        <DesktopMenu />
      </Hide>
    </>
  );
};

Homepage.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  homeInfo: PropTypes.array.isRequired,
};

export default Homepage;

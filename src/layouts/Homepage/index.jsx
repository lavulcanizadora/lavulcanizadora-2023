import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Hide } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Address from "@/src/components/AddressParagraph";

const Homepage = ({ logoUrl, homeInfo, globalContent }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{globalContent.pageTitle}</title>
        <meta name="description" content={globalContent.pageDescription} />
      </Head>
      <Hide above="md">
        <MobileMenu />
      </Hide>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} address={globalContent.address} />
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
          <Hide above="md">
            <Address address={globalContent.address} />
          </Hide>
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
  homeInfo: PropTypes.object.isRequired,
};

export default Homepage;

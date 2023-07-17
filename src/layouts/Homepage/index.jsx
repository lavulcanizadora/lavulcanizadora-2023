import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Hide, Image } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AddressParagraph from "@/src/components/AddressParagraph";
import { useState, useEffect } from "react";

const Homepage = ({ logoUrl, homeInfo, globalContent }) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    backgroundIndex === homeInfo.backgroundCarousel.length - 1
      ? setTimeout(() => {
          setBackgroundIndex(0);
        }, 5000)
      : setTimeout(() => {
          setBackgroundIndex(backgroundIndex + 1);
        }, 5000);
  });

  return (
    <>
      <Head>
        <title>{globalContent.pageTitle}</title>
        <meta name="description" content={globalContent.pageDescription} />
      </Head>
      <Hide above="md">
        <MobileMenu isHomepage />
      </Hide>
      <Flex {...style.mainContainer}>
        <Flex>
          {homeInfo.backgroundCarousel.map((image, index) =>
            index === backgroundIndex ? (
              <Image
                src={image.fields.file.url}
                alt="Background image"
                className="background-image-active"
                key={image.fields.file.url}
                {...style.backgroundImage}
              />
            ) : (
              <Image
                src={image.fields.file.url}
                alt="Background image"
                className="background-image"
                key={image.fields.file.url}
                {...style.backgroundImage}
              />
            )
          )}
          <Flex {...style.backgroundColorBlack}></Flex>
        </Flex>
        <Logo logoUrl={logoUrl} address={globalContent.address} isHomepage />
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
          <AddressParagraph address={globalContent.address} isHomepage />
        </Flex>
      </Flex>
      <Hide below="md">
        <DesktopMenu isHomepage />
      </Hide>
    </>
  );
};

Homepage.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  homeInfo: PropTypes.object.isRequired,
  // backgroundImages: PropTypes.array.isRequired,
};

export default Homepage;

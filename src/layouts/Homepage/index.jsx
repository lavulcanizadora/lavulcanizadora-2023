import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Show, Image } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AddressParagraph from "@/src/components/AddressParagraph";
import { useState, useEffect } from "react";
import LanguageToggle from "@/src/components/LanguageToggle";

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
      <Show below="md">
        <MobileMenu isHomepage />
      </Show>
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
          <div></div>
          <Flex {...style.homeText} className="body-text-homepage">
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
      <Show above="md">
        <LanguageToggle isHomepage />
        <DesktopMenu isHomepage />
      </Show>
    </>
  );
};

Homepage.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  homeInfo: PropTypes.object.isRequired,
};

export default Homepage;

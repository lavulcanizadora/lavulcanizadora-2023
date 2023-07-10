import React from "react";
import PropTypes from "prop-types";
import style from "./style";
import { Flex, Heading, Image } from "@chakra-ui/react";
import SocialMediaIcons from "@/src/components/SocialMediaIcons";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";

const backgroundVideos = [
  "https://www.lavulcanizadora.com/uploads/loop1.mp4",
  "https://www.lavulcanizadora.com/uploads/loop2.mp4",
  "https://www.lavulcanizadora.com/uploads/loop3.mp4",
];

const IndexLayout = ({ logoUrl, globalContent }) => {
  const [backgroundIndex, setBackgroundVideo] = useState(0);

  useEffect(() => {
    backgroundIndex === backgroundVideos.length - 1
      ? setTimeout(() => {
          setBackgroundVideo(0);
        }, 4000)
      : setTimeout(() => {
          setBackgroundVideo(backgroundIndex + 1);
        }, 4000);
  });

  return (
    <>
      <Head>
        <title>{globalContent.pageTitle}</title>
        <meta name="description" content={globalContent.pageDescription} />
      </Head>
      <Flex {...style.mainContainer}>
        <Flex>
          {backgroundVideos.map((url, index) =>
            backgroundIndex === index ? (
              <video
                className="cover-video-active"
                src={url}
                preLoad="auto"
                autoPlay
                muted
                loop
                key={url}
              ></video>
            ) : (
              <video
                className="cover-video"
                src={url}
                preLoad="auto"
                autoPlay
                muted
                loop
                key={url}
              ></video>
            )
          )}
        </Flex>
        <Flex {...style.menuContainer}>
          <Image src={logoUrl} alt="Logo La Vulcanizadora" {...style.logo} />
          <Flex {...style.languageMenu}>
            <Link href="/home" locale="es" passHref legacyBehavior>
              <Heading {...style.languageLink}>ES</Heading>
            </Link>
            <Heading {...style.languageHeading}>/</Heading>
            <Link href="/home" locale="en" passHref legacyBehavior>
              <Heading {...style.languageLink}>EN</Heading>
            </Link>
          </Flex>
        </Flex>
        <Flex {...style.socialIcons}>
          <SocialMediaIcons isHomepage />
        </Flex>
      </Flex>
    </>
  );
};

IndexLayout.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  globalContent: PropTypes.object.isRequired,
};

export default IndexLayout;

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

const News = ({ logoUrl, news }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${
          router.locale === "en" ? "News" : "Noticias"
        } | La Vulcanizadora`}</title>
      </Head>
      <Hide above="md">
        <MobileMenu />
      </Hide>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} />
        <Flex {...style.newsContainer}>
          <Flex className="body-text">
            {documentToReactComponents(news.content, {
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

News.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  news: PropTypes.object.isRequired,
};

export default News;

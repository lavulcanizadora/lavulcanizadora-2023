import React from "react";
import Logo from "@/src/components/Logo";
import PropTypes from "prop-types";
import { Flex, Show } from "@chakra-ui/react";
import style from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
import MobileMenu from "@/src/components/MobileMenu";
import DesktopMenu from "@/src/components/DesktopMenu";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AddressParagraph from "@/src/components/AddressParagraph";
import LanguageToggle from "@/src/components/LanguageToggle";

const News = ({ logoUrl, news, globalContent }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${router.locale === "en" ? "News" : "Noticias"} | ${
          globalContent.pageTitle
        } `}</title>
        <meta name="description" content={globalContent.pageDescription} />
      </Head>
      <Show below="md">
        <MobileMenu />
      </Show>
      <Flex {...style.mainContainer}>
        <Logo logoUrl={logoUrl} address={globalContent.address} />
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
          <AddressParagraph address={globalContent.address} />
        </Flex>
      </Flex>
      <Show above="md">
        <LanguageToggle />
        <DesktopMenu />
      </Show>
    </>
  );
};

News.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  news: PropTypes.object.isRequired,
  globalContent: PropTypes.object.isRequired,
};

export default News;

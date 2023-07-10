import React from "react";
import PropTypes from "prop-types";
import style from "./style";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Heading,
  Image,
  Hide,
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const BioCard = ({ bioInfo }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem {...style.accordionItem}>
        <AccordionButton {...style.accordionButton}>
          <Flex {...style.nameTitleContainer}>
            <Heading as="h2" {...style.cardName}>
              {bioInfo.name}
            </Heading>
            <Heading as="h3" {...style.cardTitle}>
              {bioInfo.title}
            </Heading>
          </Flex>
          <AccordionIcon {...style.accordionIcon} />
        </AccordionButton>
        <AccordionPanel {...style.accordionPanel}>
          {bioInfo.image.fields.file.url && (
            <Image
              src={bioInfo.image.fields.file.url}
              alt={bioInfo.name}
              {...style.bioImg}
            />
          )}
          <Flex {...style.cardContentContainer}>
            {bioInfo.web && (
              <Hide above="md">
                <Link href={bioInfo.web} target="_blank">
                  {bioInfo.web}
                </Link>
              </Hide>
            )}
            <Flex className="body-text" {...style.bioContainer}>
              {documentToReactComponents(bioInfo.bio, {
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
            {bioInfo.web && (
              <Hide below="md">
                <Link href={bioInfo.web} target="_blank">
                  {bioInfo.web}
                </Link>
              </Hide>
            )}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

BioCard.propTypes = {
  bioInfo: PropTypes.object.isRequired,
};

export default BioCard;

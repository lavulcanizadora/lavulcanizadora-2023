import React from "react";
import PropTypes from "prop-types";
import style from "./style";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const BioCard = ({ bioInfo }) => {
  return (
    <Flex {...style.cardContainer}>
      <Image src={bioInfo.image.fields.file.url} alt={bioInfo.name} />
      <Flex {...style.nameTitleContainer}>
        <Heading as="h2" {...style.cardName}>
          {bioInfo.name}
        </Heading>
        <Heading as="h3" {...style.cardTitle}>
          {bioInfo.title}
        </Heading>
      </Flex>
      <Link href={bioInfo.web} target="_blank">
        {bioInfo.web}
      </Link>
      <Flex className="body-text" {...style.bioContainer}>
        {documentToReactComponents(bioInfo.bio, {
          renderText: (text) => {
            return text.split("\n").reduce((children, textSegment, index) => {
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
  );
};

BioCard.propTypes = {
  bioInfo: PropTypes.object.isRequired,
};

export default BioCard;

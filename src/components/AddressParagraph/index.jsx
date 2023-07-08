import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import style from "./style";

const AddressParagraph = ({ address }) => {
  return (
    <Flex {...style.addressParagraph} className="address-text">
      {documentToReactComponents(address, {
        renderText: (text) => {
          return text.split("\n").reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
      })}
    </Flex>
  );
};

AddressParagraph.propTypes = {
  address: PropTypes.object.isRequired,
};

export default AddressParagraph;

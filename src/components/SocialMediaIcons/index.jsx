import React from "react";
import { Flex } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa6";
import style from "./style";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <Flex {...style.iconsContainer}>
      <Link href="https://www.facebook.com/lavulcanizadora" target="_blank" passHref legacyBehavior>
        <Icon as={FaFacebookF} {...style.icon} />
      </Link>
      <Link href="https://www.instagram.com/lavulcanizadora" target="_blank" passHref legacyBehavior>
        <Icon as={FaInstagram} {...style.icon} />
      </Link>
      <Link href="mailto:lavulcanizadoraco@gmail.com" target="_blank" passHref legacyBehavior>
        <Icon as={FaRegEnvelope} {...style.icon} />
      </Link>
    </Flex>
  );
};

export default SocialMediaIcons;

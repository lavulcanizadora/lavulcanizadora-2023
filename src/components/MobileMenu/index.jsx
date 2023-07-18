import React from "react";
import MobileMenuIcon from "@/src/icons/MobileMenuIcon";
import {
  Modal,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import style from "./style";
import SocialMediaIcons from "../SocialMediaIcons";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

const MobileMenu = ({ isHomepage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <>
      <Button
        {...style.menuButton}
        onClick={onOpen}
        style={isOpen ? { display: "none" } : { display: "inline-block" }}
      >
        <MobileMenuIcon isHomepage={isHomepage} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        {isHomepage ? (
          <ModalContent {...style.modalContentInvert}>
            <Flex>
              <ModalCloseButton {...style.modalCloseButtonInvert} />
            </Flex>
            <Flex {...style.menuPagesList}>
              <Link
                href={router.asPath}
                locale={router.locale === "en" ? "es" : "en"}
                passHref
                legacyBehavior
              >
                <Heading {...style.menuLinkInvert}>
                  {router.locale === "en" ? "Español" : "English"}
                </Heading>
              </Link>
              <Link href="/projects" passHref legacyBehavior>
                <Heading {...style.menuLinkInvert}>
                  {router.locale === "en" ? "Projects" : "Proyectos"}
                </Heading>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Heading {...style.menuLinkInvert}>
                  {router.locale === "en" ? "About" : "Nosotros"}
                </Heading>
              </Link>
              <Link href="/news" passHref legacyBehavior>
                <Heading {...style.menuLinkInvert}>
                  {router.locale === "en" ? "News" : "Noticias"}
                </Heading>
              </Link>
            </Flex>
            <Flex {...style.iconsMenuMobile}>
              <SocialMediaIcons isHomepage />
            </Flex>
          </ModalContent>
        ) : (
          <ModalContent {...style.modalContent}>
            <Flex>
              <ModalCloseButton {...style.modalCloseButton} />
            </Flex>
            <Flex {...style.menuPagesList}>
              <Link
                href={router.asPath}
                locale={router.locale === "en" ? "es" : "en"}
                passHref
                legacyBehavior
              >
                <Heading {...style.menuLink}>
                  {router.locale === "en" ? "Español" : "English"}
                </Heading>
              </Link>
              <Link href="/projects" passHref legacyBehavior>
                <Heading {...style.menuLink}>
                  {router.locale === "en" ? "Projects" : "Proyectos"}
                </Heading>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Heading {...style.menuLink}>
                  {router.locale === "en" ? "About" : "Nosotros"}
                </Heading>
              </Link>
              <Link href="/news" passHref legacyBehavior>
                <Heading {...style.menuLink}>
                  {router.locale === "en" ? "News" : "Noticias"}
                </Heading>
              </Link>
            </Flex>
            <Flex {...style.iconsMenuMobile}>
              <SocialMediaIcons />
            </Flex>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

MobileMenu.propTypes = {
  isHomepage: PropTypes.bool,
};

export default MobileMenu;

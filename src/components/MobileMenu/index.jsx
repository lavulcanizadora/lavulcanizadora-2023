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

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <>
      <Button
        {...style.menuButton}
        onClick={onOpen}
        style={isOpen ? { display: "none" } : { display: "inline-block" }}
      >
        <MobileMenuIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalContent {...style.modalContent}>
          <Flex>
            <ModalCloseButton {...style.modalCloseButton} />
          </Flex>
          <Flex {...style.menuPagesList}>
            <Heading {...style.menuLink}>{router.locale === "en" ? "Projects" : "Proyectos"}</Heading>
            <Heading {...style.menuLink}>{router.locale === "en" ? "About" : "Nosotros"}</Heading>
            <Heading {...style.menuLink}>{router.locale === "en" ? "News" : "Noticias"}</Heading>
          </Flex>
          <Flex {...style.iconsMenuMobile}>
            <SocialMediaIcons />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileMenu;

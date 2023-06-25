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

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(isOpen);

  return (
    <>
      <Button {...style.menuButton} onClick={onOpen} style={isOpen ? {display: "none"} : {display: "inline-block"}}>
        <MobileMenuIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalContent {...style.modalContent}>
            <Flex>
              <ModalCloseButton {...style.modalCloseButton} />
            </Flex>
            <Flex {...style.menuPagesList}>
              <Heading {...style.menuLink}>Projects</Heading>
              <Heading {...style.menuLink}>About</Heading>
              <Heading {...style.menuLink}>News</Heading>
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

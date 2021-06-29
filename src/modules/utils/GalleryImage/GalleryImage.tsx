import React from 'react';
import {
    Box, Center,
    ChakraProps, Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import AppImageModal from "./AppImageModal";

const GalleryImage = (props: ChakraProps & {img: string}) => {
    const {img, ...style} = props;
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box onClick={onOpen} {...style} _hover={{cursor: "zoom-in"}} borderRadius={'xl'}
                 boxShadow={["0 0 5px 3px white", null, "0 0 8px 5px white"]}
                 pos={"relative"} m={[3,5,6]}>

                <Image src={props.img} objectFit='cover' maxH={"inherit"} borderRadius={'xl'}/>
                <Box pos="absolute" top={0} left={0} w="100%" h="100%" maxH="inherit" borderRadius={'xl'}
                     boxShadow={["inset 0 0 5px 3px white", null, "inset 0 0 8px 5px white"]}/>

            </Box>

            <AppImageModal img={img} isOpen={isOpen} onClose={onClose}/>

        </>
    );
} ;

export default GalleryImage;
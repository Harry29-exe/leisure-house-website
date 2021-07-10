import React from 'react';
import {Box, ChakraProps, Image, useDisclosure} from "@chakra-ui/react";
import AppImageModal from "./AppImageModal";

const AppImage = (props: ChakraProps & { img: string, withoutBorder?: boolean }) => {
    const {img, ...style} = props;
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box onClick={onOpen} {...style} _hover={{cursor: "zoom-in"}}
                 boxShadow={props.withoutBorder ? '' : ["0 0 5px 3px white", null, "0 0 8px 5px white"]}
                 pos={"relative"} overflow={"hidden"}>
                <Image src={props.img} w="100%" h="100%" objectFit='cover' maxH={"inherit"}/>
                <Box pos="absolute" top={0} left={0} w="100%" h="100%" maxH="inherit"
                     boxShadow={props.withoutBorder ? '' : ["inset 0 0 5px 3px white", null, "inset 0 0 8px 5px white"]}/>
            </Box>

            <AppImageModal img={img} isOpen={isOpen} onClose={onClose}/>
        </>
    );
};

export default AppImage;
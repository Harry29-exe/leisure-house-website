import React from 'react';
import {Box, ChakraProps, Image, useDisclosure} from "@chakra-ui/react";
import AppImageModal from "./AppImageModal";

const GalleryImage = (props: ChakraProps & { img: string, imgIndex: number, onClick: (imgIndex: number) => any}) => {
    const {img, imgIndex, ...style} = props;

    return (
        <Box {...style} onClick={() => props.onClick(imgIndex)} _hover={{cursor: "zoom-in"}} borderRadius={'xl'}
             boxShadow={["0 0 5px 3px white", null, "0 0 8px 5px white"]}
             pos={"relative"} m={[3, 5, 6]}>

            <Image src={props.img} objectFit='cover' maxH={"inherit"} borderRadius={'xl'}/>
            <Box pos="absolute" top={0} left={0} w="100%" h="100%" maxH="inherit" borderRadius={'xl'}
                 boxShadow={["inset 0 0 5px 3px white", null, "inset 0 0 8px 5px white"]}/>

        </Box>

    );
};

export default GalleryImage;
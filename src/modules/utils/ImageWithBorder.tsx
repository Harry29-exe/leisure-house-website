import React from 'react';
import {Box, ChakraProps, Image} from "@chakra-ui/react";

const ImageWithBorder = (props: ChakraProps & {img: string}) => {
    const {img, ...style} = props;
    return (
        <Box {...style} boxShadow={"0 0 8px 5px white"} pos={"relative"} overflow={"hidden"}>
            <Image src={props.img} w="100%" h="100%" objectFit='cover' maxH={"inherit"}/>
            <Box pos="absolute" top={0} left={0} w="100%" h="100%" maxH="inherit" boxShadow={"inset 0 0 8px 5px white"}/>
        </Box>
    );
};

export default ImageWithBorder;
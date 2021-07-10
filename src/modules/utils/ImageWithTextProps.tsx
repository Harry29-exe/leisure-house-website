import React, {PropsWithChildren} from 'react';
import {Box, ChakraProps, Flex, Image} from "@chakra-ui/react";

type ImageWithTextProps = PropsWithChildren<ChakraProps & { img: string }>

const ImageWithText = (props: ImageWithTextProps) => {
    const {img, children, ...style} = props;

    style.w = style.w ? style.w : style.width ? style.width : '100%';
    style.h = style.h ? style.h : style.height ? style.height : '100%';

    return (
        <Box {...style} pos={"relative"}>
            <Image src={img} w={"100%"} h={"100%"} objectFit='cover'/>
            <Flex justifyContent='center' alignItems='flex-end' w={"100%"} h={"100%"} pos='absolute' top={0} left={0}>
                {children}
            </Flex>
        </Box>
    );
};

export default ImageWithText;
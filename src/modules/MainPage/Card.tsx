import React from 'react';
import {Box, Center, ChakraProps, HStack, Image, VStack} from "@chakra-ui/react";

const Card = (props: ChakraProps & {img: string, title: string, text: string}) => {
    const {img, text, title, ...style} = props;

    return (
        <Center {...style} borderRadius={'xl'} border={'2px solid white'} pos={"relative"} fontWeight={500} zIndex={0} fontSize={"md"}
                _hover={{cursor: "pointer", transform: "scale(1.05)"}} transition={"transform 0.3s"}>
            <VStack spacing={0} w={"100%"} h={"100%"} p={[2, 3, 4]}>
                <Image src={img} borderRadius={'xl'} h={"70%"} w="100%" objectFit='cover' border={"2px solid white"}/>
                <Center flexGrow={2} fontSize={"2em"}>
                    {title}
                </Center>
                <Center>
                    {text}
                </Center>
            </VStack>

            <Box pos='absolute' left={0} top={0} w={'100%'} h={'100%'} bg={`#2A653C`} opacity={0.8} borderRadius={'xl'} zIndex={-1}/>
        </Center>
    );
};

export default Card;
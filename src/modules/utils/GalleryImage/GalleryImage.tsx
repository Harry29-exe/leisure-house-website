import React, {useState} from 'react';
import {Box, Center, ChakraProps, Image, Spinner} from "@chakra-ui/react";

const GalleryImage = (props: ChakraProps & { img: string, imgIndex: number, onClick: (imgIndex: number) => any }) => {
    const {img, imgIndex, ...style} = props;
    const [isLoaded, setLoaded] = useState<boolean>(false);

    return (
        <Box {...style} onClick={() => props.onClick(imgIndex)} _hover={{cursor: "zoom-in"}} borderRadius={'xl'}
             boxShadow={["0 0 5px 3px white", null, "0 0 8px 5px white"]}
             pos={"relative"} m={[3, 5, 6]}
             minW={isLoaded? 0: '300px'} minH={isLoaded? 0: '300px'}>

            <Image src={props.img} objectFit='cover' onLoad={() => setLoaded(true)} maxH={"inherit"}
                   borderRadius={'xl'}/>

            {!isLoaded &&
            <Center pos='absolute' top={0} left={0} w='100%' h='100%'>
                <Spinner minH={'125px'} minW={'125px'} thickness={'8px'}
                     color={'primary.600'} emptyColor={'gray.600'}/>
            </Center>
            }
            <Box pos="absolute" top={0} left={0} w="100%" h="100%" maxH="inherit" borderRadius={'xl'}
                 boxShadow={["inset 0 0 5px 3px white", null, "inset 0 0 8px 5px white"]}/>

        </Box>

    );
};

export default GalleryImage;
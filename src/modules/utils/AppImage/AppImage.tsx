import React, {useState} from 'react';
import {Box, Center, ChakraProps, Image, Spinner, useDisclosure} from "@chakra-ui/react";
import AppImageModal from "./AppImageModal";

const AppImage = (props: ChakraProps & { img: string, withoutBorder?: boolean, minW?: string, minH?: string }) => {
    const {img, withoutBorder, minW, minH, ...style} = props;
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isLoaded, setLoaded] = useState<boolean>(false);

    return (
        <>
            <Box onClick={onOpen} {...style} _hover={{cursor: "zoom-in"}}
                 boxShadow={props.withoutBorder ? '' : ["0 0 5px 3px white", null, "0 0 8px 5px white"]}
                 pos={"relative"} overflow={"hidden"}
                 minW={isLoaded? 0: minW? minW: '150px'} minH={isLoaded? 0: minH? minH:'300px'}>


                <Image src={props.img} w="100%" h="100%" objectFit='cover' maxH={"inherit"} onLoad={() => setLoaded(true)}/>

                {!isLoaded &&
                <Center minH={'100%'} minW={'100%'} pos='absolute' top={0} left={0}>
                    <Spinner minH={'125px'} minW={'125px'} thickness={'5px'}
                             color={'primary.600'} emptyColor={'gray.600'}/>
                </Center>
                }

                <Box pos="absolute" top={0} left={0} w="100%" h="100%" maxH="inherit"
                     boxShadow={props.withoutBorder ? '' : ["inset 0 0 5px 3px white", null, "inset 0 0 8px 5px white"]}/>
            </Box>

            <AppImageModal img={img} isOpen={isOpen} onClose={onClose}/>
        </>
    );
};

export default AppImage;
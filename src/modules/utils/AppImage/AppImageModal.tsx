import React from 'react';
import {Box, Center, CloseButton, Flex, Image, Portal} from "@chakra-ui/react";

const AppImageModal = (props: { img: string, isOpen: any, onClose: any }) => {

    return (
        <Portal>
            <Box display={props.isOpen ? "initial" : 'none'} style={{marginTop: 0}} zIndex={100}
                 pos='fixed' mt={0} top={0} left={0} bottom={0} right={0} w='100vw' h='100vh'
                 overflow='hidden' onClick={props.onClose}>


                <Flex pos='absolute' h='10%' w='100%' justifyContent='flex-end' pt={['60px', '80px', '20px']} pr={10}
                      zIndex={101}>
                    <CloseButton onClick={props.onClose} size='lg' transform={'scale(1.5)'} zIndex={101}/>
                </Flex>
                <Center h='100%' pos={'relative'} zIndex={100} borderRadius={'2xl'} overflow='hidden'>

                    <Image maxW={'90%'} maxH={'90%'} objectFit={'cover'} src={props.img} boxShadow='0 0 8px 5px white'
                           m={['25px', '35px', '50px', '70px']} borderRadius={'2xl'}/>

                </Center>

                <Box pos='absolute' left={0} bottom={0} right={0} w='100vw' h='100vh'
                     opacity={0.7} bg={'primary.200'} zIndex={98}/>
            </Box>
        </Portal>
    );
};

export default AppImageModal;
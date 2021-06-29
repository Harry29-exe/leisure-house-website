import React from 'react';
import {Box, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, VStack} from "@chakra-ui/react";
import VNavbarLink from "./VNavbarLink";
import {links} from "./VNavbar";

const MobileNavbar = (props: {isOpen: boolean, onClose: () => void}) => {
    return (
        <Drawer isOpen={props.isOpen} onClose={props.onClose} size={'full'}>
            <DrawerOverlay/>
            <DrawerContent bg={'transparent'} textAlign='center' fontFamily='lobster'>


                <DrawerBody fontSize={'2.5rem'}>
                    <Center onClick={props.onClose} mb={'50px'}>
                        <VNavbarLink name="Zaścianek zahorodyński" path='/'/>
                    </Center>
                    {/*<Box w={'100%'} h={0} borderTop={'2px solid white'}/>*/}

                    <VStack spacing={'50px'}>
                    {links.map(l =>
                        <Box key={l.name} onClick={props.onClose}>
                            <VNavbarLink key={l.path} name={l.name} path={l.path}/>
                        </Box>
                    )}
                    </VStack>

                    <Box pos="absolute" top={0} left={0} w="100%" h="100%" bg={"primary.600"} opacity={0.95} zIndex={-1}/>
                </DrawerBody>


            </DrawerContent>
        </Drawer>
    );
};

export default MobileNavbar;
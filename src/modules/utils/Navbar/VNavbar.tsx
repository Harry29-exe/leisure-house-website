import React from 'react';
import {Box, Button, Center, Flex, useBreakpointValue, useDisclosure} from "@chakra-ui/react";
import VNavbarLink from "./VNavbarLink";
import {HamburgerIcon} from "@chakra-ui/icons";
import MobileNavbar from "./MobileNavbar";

export const links = [
    {name: 'Atrakcje', path: '/atrakcje'},
    {name: 'Aktualności', path: '/aktualności'},
    {name: 'Rezerwacje', path: '/rezerwacje'},
    {name: 'Galeria', path: '/galeria'},
    {name: 'Kontakt & Dojazd', path: '/kontakt-dojazd'},

];

const VNavbar = () => {
    const navbarType = useBreakpointValue({base: "none", sm: "small", lg: "normal"});
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Flex pos='relative' w='100%' alignContent='center' justifyContent='center'
              zIndex={'docked'} color={'white'} py={1} px={2}
              backdropBlur='6px' fontFamily='Lobster' flexWrap={'wrap'}
              fontSize='2em' fontWeight={400}
              textShadow='2px 2px 4px black' pb={0} mb={0} boxShadow='0 0 15px 5px black'
              bg={`#2A653Cbb`}
        >


            {navbarType === "normal" ?
                <>
                    <VNavbarLink name="Zaścianek zahorodyński" path="/"/>
                    <Flex flexGrow={2} justifyContent='flex-start' alignContent='center'>
                        {links.map(l =>
                            <VNavbarLink key={l.path} name={l.name} path={l.path} mx={5}/>
                        )}
                    </Flex>
                </>
                :
                navbarType === "small" ?
                    <>
                        <VNavbarLink name="Majdan zachorodyński" path="/"/>
                        <Box flexGrow={2}/>
                        <Center>
                            <Button onClick={onOpen} variant={"ghost"} leftIcon={<HamburgerIcon/>}/>
                        </Center>

                        <MobileNavbar isOpen={isOpen} onClose={onClose}/>
                    </>
                    :
                    <>
                        <Center>
                            <Button onClick={onOpen} variant={"ghost"} leftIcon={<HamburgerIcon fontSize="2em"/>}/>
                        </Center>
                        <Box flexGrow={2}/>

                        <MobileNavbar isOpen={isOpen} onClose={onClose}/>

                    </>
            }

            <Box w='100%' h={0} borderTop='2px solid' borderColor='white'/>

        </Flex>
    );
};

export default VNavbar;
import React from 'react';
import {Box, Button, Center, Flex, MenuButton, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../../ColorModeSwitcher";
import VNavbarLink, {LinkProps} from "./VNavbarLink";
import {HamburgerIcon} from "@chakra-ui/icons";
import grass from '../../../resources/grass3.jpg'

const VNavbar = () => {
    const bg = useColorModeValue("primary.400", "primary.700");
    const navbarType = useBreakpointValue({base: "none", sm: "small", md: "normal"});

    const links = [
            {name: 'Rezerwacje', path: '/reservations'},
            {name: 'Galeria', path: '/galley'},
            {name: 'Kontakt', path: '/contact'}];

    return (
        <Flex pos='relative' w='100%' alignContent='center'  justifyContent='center'
              zIndex={'docked'} color={'white'} py={1} px={2}
              backdropBlur='6px' fontFamily='Lobster' flexWrap={'wrap'}
              fontSize='2em' fontWeight={400} boxShadow='0 0 15px 3px black'

              // bg={bg}
            // bgImage={grass}
              textShadow='2px 2px 4px black'
        >



            {navbarType === "normal" ?
                <>
                    <VNavbarLink name="Majdan zachorodyński" path="/"/>
                    <Flex flexGrow={2} justifyContent='flex-start' alignContent='center'>
                        {links.map(l =>
                            <>
                                <Box mx={5}/>
                                <VNavbarLink name={l.name} path={l.path}/>
                            </>
                        )}
                    </Flex>
                </>
                :
                navbarType === "small" ?
                <>
                    <VNavbarLink name="Majdan zachorodyński" path="/"/>
                    <Box flexGrow={2} />
                    <Center>
                        <Button variant={"ghost"} leftIcon={<HamburgerIcon/>}/>
                    </Center>
                </>
                    :
                <>
                    <Center>
                        <Button variant={"ghost"} leftIcon={<HamburgerIcon fontSize="2em"/>}/>
                    </Center>
                    <Box flexGrow={2} />
                </>
            }

            <Center borderRadius={'lg'} overflow='none'>
                <ColorModeSwitcher/>
            </Center>

            <Box w='100%' h={0} borderTop='2px solid' borderColor='white' mb={1}/>
        </Flex>
    );
};

export default VNavbar;
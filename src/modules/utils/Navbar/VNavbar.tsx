import React from 'react';
import {Box, Button, Center, Flex, MenuButton, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../../ColorModeSwitcher";
import VNavbarLink, {LinkProps} from "./VNavbarLink";
import {HamburgerIcon} from "@chakra-ui/icons";
import grass from '../../../resources/grass3.jpg'

const VNavbar = () => {
    const bg = useColorModeValue("primary.400", "primary.700");
    const navbarType = useBreakpointValue({base: "none", sm: "small", lg: "normal"});
    let bgVal = useColorModeValue(40, 40);

    const links = [
            {name: 'Atrakcje', path: '/atrakcje'},
            {name: 'Aktualności', path: '/aktualności'},
            {name: 'Rezerwacje', path: '/rezerwacje'},
            {name: 'Galeria', path: '/galeria'},
            {name: 'Kontakt & Dojazd', path: '/kontakt-dojazd'},

    ];

    return (
        <Flex pos='relative' w='100%' alignContent='center'  justifyContent='center'
              zIndex={'docked'} color={'white'} py={1} px={2}
              backdropBlur='6px' fontFamily='Lobster' flexWrap={'wrap'}
              fontSize='2em' fontWeight={400}
              textShadow='2px 2px 4px black' pb={0} mb={0} boxShadow='0 0 15px 5px black'
              bg={`#2A653Cbb`}
            // bgImage={grass}
        >



            {navbarType === "normal" ?
                <>
                    <VNavbarLink name="Zaścianek zahorodyński" path="/"/>
                    <Flex flexGrow={2} justifyContent='flex-start' alignContent='center'>
                        {links.map(l =>
                            <>
                                <Box key={l.name} mx={5}/>
                                <VNavbarLink key={l.path} name={l.name} path={l.path}/>
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

            {/*<Center borderRadius={'lg'} overflow='none'>*/}
            {/*    <ColorModeSwitcher/>*/}
            {/*</Center>*/}

            <Box w='100%' h={0} borderTop='2px solid' borderColor='white'/>
        </Flex>
    );
};

export default VNavbar;
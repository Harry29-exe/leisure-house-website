import React from 'react';
import {Box, Center, Flex} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../../ColorModeSwitcher";
import VNavbarLink, {LinkProps} from "./VNavbarLink";


const VNavbar = (props: { links: LinkProps[] }) => {
    return (
        <Flex w='100%' alignContent='center'  justifyContent='center'
        color={'white'} p={2} backdropBlur='6px'
              fontSize='2em' fontWeight={400} bg={'rgba(0, 150, 50, 0.7)'}>
            <Center fontFamily='Lobster' fontSize='1.3em'>
                Majdan zachorodyński
            </Center>

            <Center flexGrow={2}>
                {props.links.map(l =>
                    <>
                        <VNavbarLink name={l.name} path={l.path}/>
                        <Box mx={3}>/</Box>
                    </>
                )}
            </Center>

            <Center>
                <ColorModeSwitcher/>
            </Center>
        </Flex>
    );
};

export default VNavbar;
import {Box, Flex} from "@chakra-ui/react";
import React from "react";

export const MainPageHeader = () => {
    return <Box pos='relative' w='100%' minH='10px'>
        <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white'
              textAlign='center'
              fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black'>
            <Box w='100%'>Zaścianek zahorodyński</Box>
            <Box w='100%' fontSize='0.5em'>miejsce blisko natury</Box>
        </Flex>
    </Box>;
}
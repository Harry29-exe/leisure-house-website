import React from 'react';
import {Box, Flex} from "@chakra-ui/react";

const PageTitle = (props: { title: string }) => {
    return (
        <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white'
              textAlign='center'
              fontFamily='Lobster' fontSize={['50px', '60px', '75px', '100px']} textShadow='3px 3px 5px black'
              py={[4, 5, 6]}>
            <Box w='100%'>{props.title}</Box>
        </Flex>
    );
};

export default PageTitle;
import React from 'react';
import {Box, Flex} from "@chakra-ui/react";

const PageTitle = (props: {title: string}) => {
    return (
        <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white' textAlign='center'
              fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black' py={[2,3,4]}>
            <Box w='100%'>{props.title}</Box>
        </Flex>
    );
};

export default PageTitle;
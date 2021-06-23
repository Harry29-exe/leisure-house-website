import React from 'react';
import {Box, Center} from "@chakra-ui/react";

const TextSection = (props: {test:string}) => {
    return (
        <Center borderRadius={'2xl'} bg={'primary.100'} border={'2px solid'} borderColor={'gray.400'} p={4}>
            {props.test}
        </Center>
    );
};

export default TextSection;
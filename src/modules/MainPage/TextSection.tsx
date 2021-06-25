import React, {PropsWithChildren} from 'react';
import {Box} from "@chakra-ui/react";

const TextSection = (props: PropsWithChildren<{title:string}>) => {
    return (
        <Box w={'100%'} fontSize={['1rem', '1.2rem', '1.5rem']}  p={6} borderY={'2px solid white'} pos='relative' zIndex={1} color='white'>
            <Box fontWeight={400} fontSize={'1.5em'} fontFamily='Lobster'>{props.title}</Box>
            <p style={{display: 'inline-block'}}>
                {props.children}
            </p>
            <Box pos='absolute' left={0} top={0} w={'100%'} h={'100%'} bg={`#2A653C`} opacity={0.8} zIndex={-1}/>
        </Box>
    );
};

export default TextSection;
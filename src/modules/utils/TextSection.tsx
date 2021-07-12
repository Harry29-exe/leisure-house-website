import React, {PropsWithChildren, useRef} from 'react';
import {Box} from "@chakra-ui/react";

export const convertJsonText = (text: string): JSX.Element => {
    let key = 0;
    return (
        <>
        {
            text.split("\n").map(
                text => <div key={key++}>{text}<br/></div>
            )
        }
        </>
    )
}

const TextSection = (props: PropsWithChildren<{ title: string }>) => {
    return (
        <Box w={'100%'} fontSize={['1rem', '1.2rem', '1.5rem']} p={6} borderY={'2px solid white'} pos='relative'
             zIndex={1} color='white'>
            <Box fontWeight={400} fontSize={'1.5em'} fontFamily='Lobster'
                 ml={['1%', '4%', '6%', '10%',]}>{props.title}</Box>
            <Box style={{display: 'inline-block'}} ml={['1%', '4%', '6%', '10%',]} w={['98%', '92%', '88%', '80%']}>
                {props.children}
            </Box>
            <Box pos='absolute' left={0} top={0} w={'100%'} h={'100%'} bg={`#2A653C`} opacity={0.8} zIndex={-1}/>
        </Box>
    );
};

export default TextSection;
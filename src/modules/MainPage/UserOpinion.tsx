import React from 'react';
import {Box} from "@chakra-ui/react";

export type UserOpinionProps = {
    userName: string,
    opinion: string
}

const UserOpinion = (props: UserOpinionProps) => {
    return (
        <Box w={['95%', '90%', '85%', '80%']} fontSize={['1rem', '1.2rem', '1.5rem']} p={5} pt={4}
             border={'2px solid white'} borderRadius={'2xl'} overflow='hidden'
             pos='relative' zIndex={1} color='white'>

            <Box fontWeight={400} fontSize={'1.5em'} fontFamily='Lobster'>{props.userName}</Box>
            <Box>
                {props.opinion}
            </Box>
            <Box pos='absolute' left={0} top={0} w={'100%'} h={'100%'} bg={`#2A653C`} opacity={0.8} zIndex={-1}/>
        </Box>
    );
};

export default UserOpinion;
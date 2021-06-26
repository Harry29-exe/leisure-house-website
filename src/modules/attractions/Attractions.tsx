import React, {useState} from 'react';
import Attraction from './Attraction';
import {AttractionModel, fetchAttractions} from "./AttractionsPresenter";
import {Box, Flex, VStack} from "@chakra-ui/react";

const Attractions = () => {
    const [state, setState] = useState<AttractionModel[]>();

    if(!state) {
        fetchAttractions()
            .then(
                value => setState(value),
                reason => console.log(reason));
    }

    return (
        <Box w="100%" h="100%">

            <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white' textAlign='center'
                  fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black'>
                <Box w='100%'>Atrakcje</Box>
            </Flex>

            <Box/>

            <VStack w='100%' h='100%' spacing={20}>
                {state &&
                    state.map(
                    a => <Attraction key={a.name} attraction={a}/>
                )}
            </VStack>

            <Box w={1} h={20}/>
        </Box>
    );
};

export default Attractions;
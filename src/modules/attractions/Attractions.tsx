import React, {useState} from 'react';
import Attraction from './Attraction';
import {AttractionModel, fetchAttractions} from "./AttractionsPresenter";
import {Box, Flex, VStack} from "@chakra-ui/react";
import PageTitle from "../utils/PageTitle";

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

            <PageTitle title={"Atrakcje"}/>

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
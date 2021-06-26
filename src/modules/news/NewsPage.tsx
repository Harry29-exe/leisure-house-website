import React, {useState} from 'react';
import {Box, Flex, VStack} from "@chakra-ui/react";
import Attraction from "../attractions/Attraction";
import {AttractionModel, fetchAttractions} from "../attractions/AttractionsPresenter";
import News from './News';
import {fetchNews, NewsModel} from "./NewsPresenter";

const NewsPage = () => {
    const [state, setState] = useState<NewsModel[]>();

    if(!state) {
        fetchNews()
            .then(
                value => setState(value),
                reason => console.log(reason));
    }

    return (
        <Box w="100%" h="100%">

            <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white' textAlign='center'
                  fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black'>
                <Box w='100%'>Aktualności</Box>
            </Flex>

            <Box/>

            <VStack w='100%' h='100%' spacing={20}>
                {state &&
                state.map(
                    a => <News key={a.name} news={a}/>
                )}
            </VStack>

            <Box w={1} h={20}/>
        </Box>
    );
};

export default NewsPage;
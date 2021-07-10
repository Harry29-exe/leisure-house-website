import React, {useState} from 'react';
import {Box, VStack} from "@chakra-ui/react";
import News from './News';
import {fetchNews, NewsModel} from "./NewsPresenter";
import PageTitle from "../utils/PageTitle";

const NewsPage = () => {
    const [state, setState] = useState<NewsModel[]>();

    if (!state) {
        fetchNews()
            .then(
                value => setState(value),
                reason => console.log(reason));
    }

    return (
        <Box w="100%" h="100%">

            <PageTitle title={"Aktualności"}/>

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
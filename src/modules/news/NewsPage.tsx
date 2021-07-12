import React, {useState} from 'react';
import {Box, Center, Flex, Link, VStack} from "@chakra-ui/react";
import News from './News';
import {fetchNews, NewsModel} from "./NewsPresenter";
import PageTitle from "../utils/PageTitle";
import TextSection from "../utils/TextSection";

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

            <TextSection title={"Social media"}>
                <h3>Odwiedz nas na social mediach</h3>
                <Flex w='100%' flexWrap='wrap' justifyContent={'center'}>
                    <SocialMedium name={'Facebook'} color={'blue.400'}/>
                    <SocialMedium name={'Twitter'} color={'blue.800'}/>
                    <SocialMedium name={'Instagram'} color={'purple.600'}/>
                    <SocialMedium name={'Youtube'} color={'red.400'}/>
                </Flex>

            </TextSection>

            <VStack w='100%' h='100%' spacing={20} mt={20}>
                {state &&
                state.map(
                    a => <News key={a.name} news={a}/>
                )}
            </VStack>

            <Box w={1} h={20}/>
        </Box>
    );
};

const SocialMedium = (props: {name: string, color: string}) => {
    return (
        <Link as={Center} href={"https://facebook.com"} border={"2px solid"} m={4} fontWeight={600}
              borderColor={"white"} borderRadius={'xl'} w='45%' minH='100px' bg={props.color}>
            {props.name}
        </Link>
    );
};

export default NewsPage;
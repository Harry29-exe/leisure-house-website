import React, {useState} from 'react';
import {Box, Center, Flex, Link, VStack} from "@chakra-ui/react";
import News from './News';
import {fetchNews, NewsPageModel, SocialMediaModel} from "./NewsPresenter";
import PageTitle from "../utils/PageTitle";
import TextSection from "../utils/TextSection";

const NewsPage = () => {
    const [state, setState] = useState<NewsPageModel & {socialMedia: SocialMediaModel[]}>();

    if (!state) {
        fetchNews()
            .then(
                value => setState(value),
                reason => console.log(reason));
    }

    if(!state) {
        return <PageTitle title={"Aktualności"}/>;
    }

    return (
        <Box w="100%" h="100%">

            <PageTitle title={"Aktualności"}/>

            <TextSection title={"Social media"}>
                <h3>{state.socialMediaDescription}</h3>
                <Flex w='100%' flexWrap='wrap' justifyContent={'center'}>
                    {
                        state.socialMedia.map(
                            sm => <SocialMedium name={sm.name} color={sm.color} link={sm.link}/>
                        )
                    }
                </Flex>

            </TextSection>

            <VStack w='100%' h='100%' spacing={20} mt={20}>
                {
                    state.news.map(
                        a => <News key={a.name} news={a}/>
                    )
                }
            </VStack>

            <Box w={1} h={20}/>
        </Box>
    );
};

const SocialMedium = (props: {name: string, color: string, link: string}) => {
    return (
        <Center as={Link} href={props.link} border={"2px solid"} m={[4, null, '2.5%']}
              w={['90%', null, '45%']} fontWeight={600} pos={'relative'} zIndex={1} overflow={'hidden'}
              borderColor={"white"} borderRadius={'xl'} minH='100px' isExternal>

            {props.name}

            <Box bg={props.color} opacity={0.75} pos={'absolute'} w={'100%'} h={'100%'} zIndex={-1}/>
        </Center>
    );
};

export default NewsPage;
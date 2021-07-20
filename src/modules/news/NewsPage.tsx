import React, {useState} from 'react';
import {Box, Center, Flex, Link, VStack} from "@chakra-ui/react";
import News from './News';
import {fetchNews, NewsPageModel, SocialMediaModel} from "./NewsPresenter";
import PageTitle from "../utils/PageTitle";

const NewsPage = () => {
    const [state, setState] = useState<NewsPageModel & { socialMedia: SocialMediaModel[] }>();

    if (!state) {
        fetchNews()
            .then(
                value => setState(value),
                reason => console.log(reason));
    }

    if (!state) {
        return <PageTitle title={"Aktualności"}/>;
    }

    return (
        <Box w="100%" h="100%">

            <PageTitle title={"Aktualności"}/>

            <VStack w={['95%', '90%', '80%', '75%']} mx='auto' pos='relative' zIndex={1} overflow={'hidden'}
                    borderRadius={'2xl'} border={'2px solid white'} spacing={0}>

                <Box fontSize={['xl', null, null, '2xl']} fontWeight={600} mt={4} px={'2.5%'} textAlign='center'
                     w='100%'>
                    {state.socialMediaDescription}
                </Box>
                <Flex w='100%' flexWrap='wrap' justifyContent={'center'}>
                    {
                        state.socialMedia.map(
                            sm => <SocialMedium name={sm.name} color={sm.color} link={sm.link}/>
                        )
                    }
                </Flex>

                <Box pos='absolute' top={0} left={0} bg={'primary.700'} opacity={0.8}
                     w='100%' h='100%' zIndex={-1}/>
            </VStack>

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

const SocialMedium = (props: { name: string, color: string, link: string }) => {
    return (
        <Center as={Link} href={props.link} border={"2px solid"} m={[4, null, '2.5%']}
                w={['90%', null, '45%']} fontWeight={600} pos={'relative'} zIndex={1} overflow={'hidden'}
                borderColor={"white"} borderRadius={'xl'} minH='100px' isExternal fontSize={'xl'}>

            {props.name}

            <Box bg={props.color} opacity={0.75} pos={'absolute'} w={'100%'} h={'100%'} zIndex={-1}/>
        </Center>
    );
};

export default NewsPage;
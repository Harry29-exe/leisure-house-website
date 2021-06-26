import React from 'react';
import {NewsModel} from "./NewsPresenter";
import {Box, Center, Image, VStack} from "@chakra-ui/react";

const News = (props: {news: NewsModel}) => {
    return (
        <Box w={['95%', '90%', '80%', '75%']} pos='relative' zIndex={1} overflow={'hidden'} borderRadius={'2xl'}>
            <VStack spacing={2}>
                <Center fontFamily='lobster' fontSize={'2em'}>
                    {props.news.name}
                </Center>
                <Center maxW={'90%'}>
                    {props.news.shortDescription}
                </Center>

                <Center flexGrow={2}>
                    <Image w='90%' maxH={['300px', null, '400px']} src={props.news.image} objectFit={'cover'} borderRadius={'2xl'} my={6}/>
                </Center>

            </VStack>

            <Box pos='absolute' top={0} left={0} bg={'primary.500'} opacity={0.8}
                    w='100%' h='100%' zIndex={-1} border={'2px solid white'} borderRadius={'2xl'}/>
        </Box>
    );
};

export default News;
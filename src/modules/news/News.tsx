import React from 'react';
import {NewsModel} from "./NewsPresenter";
import {Box, Center, HStack, Image, useBreakpointValue, useDisclosure, VStack} from "@chakra-ui/react";
import NewsModal from "./NewsModal";

const News = (props: { news: NewsModel }) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const screenSize = useBreakpointValue({base: "small", md: "large"})

    return (
        <>
            <Box onClick={onOpen} w={['95%', '90%', '80%', '75%']} pos='relative' zIndex={1} overflow={'hidden'}
                 borderRadius={'2xl'} _hover={{cursor: 'pointer'}}>
                {screenSize === "large" ?

                    <HStack spacing={2} px={8} py={4}>
                        <VStack w={'40%'}>
                            <Center fontFamily='lobster' fontSize={'2em'}>
                                {props.news.name}
                            </Center>
                            <Center maxW={'90%'} fontSize='1.2em'>
                                {props.news.shortDescription}
                            </Center>
                        </VStack>

                        <Center w='60%'>
                            <Image w='100%' h={['300px', null, '400px']} src={'images' + props.news.image}
                                   objectFit={'cover'}
                                   borderRadius={'2xl'} my={6}/>
                        </Center>
                    </HStack>
                    :

                    <VStack spacing={2} px={8} py={4}>
                        <VStack w={'90%'}>
                            <Center fontFamily='lobster' fontSize={'2em'}>
                                {props.news.name}
                            </Center>
                            <Center maxW={'90%'} fontSize='1.2em'>
                                {props.news.shortDescription}
                            </Center>
                        </VStack>

                        <Center w='90%'>
                            <Image w='100%' h={['300px', null, '400px']} src={'images' + props.news.image}
                                   objectFit={'cover'}
                                   borderRadius={'2xl'} my={6}/>
                        </Center>
                    </VStack>
                }

                <Box pos='absolute' top={0} left={0} bg={'primary.600'} opacity={0.8}
                     w='100%' h='100%' zIndex={-1} border={'2px solid white'} borderRadius={'2xl'}/>
            </Box>

            <NewsModal onClose={onClose} isOpen={isOpen} title={props.news.name} content={props.news.description}/>
        </>
    );
};

export default News;
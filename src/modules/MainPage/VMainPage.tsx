import React from 'react';
import {Box, Center, Flex, HStack, Image, useColorModeValue, VStack} from "@chakra-ui/react";
import main from "../../resources/main.jpg";
import img1 from "../../resources/img1.jpg";
import img2 from "../../resources/img2.jpg";
import wood from "../../resources/wood.jpg";
import wood2 from "../../resources/wood2.jpg";
import Carousel from "../utils/carousel/Carousel";
import TextSection from './TextSection';


const VMainPage = () => {
    const bg = useColorModeValue("primary.20", "primary.900");

    return (
        <VStack w='100%' spacing={20}>
            <Box pos='relative' w='100%' minH='10px'>

                <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white' textAlign='center'
                        fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black'>
                    <Box w='100%'>Majdan zachorodyński</Box>
                    <Box w='100%' fontSize='0.5em'>miejsce blisko natury</Box>
                </Flex>
            </Box>

            <TextSection title={"O nas"} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies posuere nibh, id ullamcorper orci gravida non. Vestibulum rhoncus imperdiet mauris, eu auctor est
                pharetra dictum. Vivamus rutrum molestie felis sit amet ornare. Donec auctor felis ut elit dignissim varius. Morbi velit purus, lobortis imperdiet arcu quis, feugiat vestibulum massa.
                Donec consectetur varius porttitor.
                Curabitur elementum, massa at placerat sodales, diam risus cursus nisl, quis commodo tellus quam eu mi. Sed semper lacinia orci, ut tempor felis vulputate sit amet.
                Duis id risus congue, lacinia eros eu, pharetra sem. Quisque varius id purus id eleifend. Aenean pretium euismod odio quis lobortis. Donec ut urna at felis sodales condimentum
            </TextSection>

            <Flex w={['95%', '85%', '80%']}  pos={'relative'} flexFlow={'wrap'} h={['400px', '500px', '600px']}>
                <Box w={'100%'} h='100%' pos={'relative'} borderRadius={'30px'} boxShadow={"0 0 8px 5px white"}>
                    <Carousel images={[img1, img2, main]} w={"100%"} h={"100%"} borderRadius={'30px'}/>
                    <Box pointerEvents='none' pos={'absolute'} left={0} top={0} w={'100%'} h={'100%'} borderRadius={'30px'} boxShadow={"inset 0 0 8px 5px white"}/>
                </Box>
            </Flex>

            <TextSection title={"Dlaczego warto"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies posuere nibh, id ullamcorper orci gravida non. Vestibulum rhoncus imperdiet mauris, eu auctor est
                pharetra dictum. Vivamus rutrum molestie felis sit amet ornare. Donec auctor felis ut elit dignissim varius. Morbi velit purus, lobortis imperdiet arcu quis, feugiat vestibulum massa.
                Donec consectetur varius porttitor.\n" +
                Curabitur elementum, massa at placerat sodales, diam risus cursus nisl, quis commodo tellus quam eu mi. Sed semper lacinia orci, ut tempor felis vulputate sit amet.
                Duis id risus congue, lacinia eros eu, pharetra sem. Quisque varius id purus id eleifend. Aenean pretium euismod odio quis lobortis. Donec ut urna at felis sodales condimentum
                a ac erat. Donec congue euismod dui, eget laoreet massa.
                Quisque sed metus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at bibendum nisi. Cras sodales blandit tortor,
                at tempus metus fermentum id. Aliquam dignissim nibh nec nibh fringilla, a ultricies sem faucibus. Integer placerat hendrerit eros, a suscipit metus porta sed.
            </TextSection>

            <Box>

            </Box>

            <Box w={1} h={'2000px'}/>

        </VStack>
    );
};

export default VMainPage;
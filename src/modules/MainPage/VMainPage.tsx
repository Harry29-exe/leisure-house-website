import React from 'react';
import {Box, Center, Flex, HStack, Image, useColorModeValue, VStack} from "@chakra-ui/react";
import main from "../../resources/main.jpg";
import TextSection from "../utils/TextSection";
import img1 from "../../resources/img1.jpg";
import img2 from "../../resources/img2.jpg";
import wood from "../../resources/wood.jpg";
import wood2 from "../../resources/wood2.jpg";


const VMainPage = () => {
    const bg = useColorModeValue("primary.20", "primary.900");

    return (
        <VStack w='100%' spacing={10}>
            <Box pos='relative' w='100%' minH='10px'>

                <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white' textAlign='center'
                        fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black'>
                    <Box w='100%'>Majdan zachorodyński</Box>
                    <Box w='100%' fontSize='0.5em'>miejsce blisko natury</Box>
                </Flex>
            </Box>

            <Box w={'100%'} fontSize='1.7rem'  p={6} borderY={'2px solid white'} pos='relative' zIndex={1}>
                <Box fontWeight={400} fontSize={'1.5em'} fontFamily='Lobster'>O nas</Box>
                <p style={{display: 'inline-block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies posuere nibh, id ullamcorper orci gravida non. Vestibulum rhoncus imperdiet mauris, eu auctor est
                    pharetra dictum. Vivamus rutrum molestie felis sit amet ornare. Donec auctor felis ut elit dignissim varius. Morbi velit purus, lobortis imperdiet arcu quis, feugiat vestibulum massa.
                    Donec consectetur varius porttitor.
                    Curabitur elementum, massa at placerat sodales, diam risus cursus nisl, quis commodo tellus quam eu mi. Sed semper lacinia orci, ut tempor felis vulputate sit amet.
                    Duis id risus congue, lacinia eros eu, pharetra sem. Quisque varius id purus id eleifend. Aenean pretium euismod odio quis lobortis. Donec ut urna at felis sodales condimentum
                    a ac erat. Donec congue euismod dui, eget laoreet massa.
                    Quisque sed metus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at bibendum nisi. Cras sodales blandit tortor,
                    at tempus metus fermentum id. Aliquam dignissim nibh nec nibh fringilla, a ultricies sem faucibus. Integer placerat hendrerit eros, a suscipit metus porta sed.
                </p>
                <Box pos='absolute' left={0} top={0} w={'100%'} h={'100%'} bg={'rgba(40,40,40,1)'} opacity={0.8} zIndex={-1}/>
            </Box>

            <Flex w={['95%', '85%', '80%']}  pos={'relative'} flexFlow={'wrap'}>
                <Box w={'55%'} pos={'relative'} borderRadius={'30px'} boxShadow={"0 0 8px 5px black"} margin={4}>
                    <Image src={img2} borderRadius={'30px'} />
                    <Box pos={'absolute'} left={0} top={0} w={'100%'} h={'100%'} borderRadius={'30px'} boxShadow={"inset 0 0 8px 5px black"}/>
                </Box>

                <Box w={'40%'} pos={'relative'} borderRadius={'30px'} boxShadow={"0 0 8px 5px black"} margin={4}>
                    <Image src={img1} w={'100%'} h={'100%'} borderRadius={'30px'} objectFit={'cover'}/>
                    <Box pos={'absolute'} left={0} top={0} w={'100%'} h={'100%'} borderRadius={'30px'} boxShadow={"inset 0 0 8px 5px black"}/>
                </Box>

                <Box w={'100%'} pos={'relative'} borderRadius={'30px'} boxShadow={"0 0 8px 5px black"} margin={4}>
                    <Image src={main} w={'100%'} h={'100%'} borderRadius={'30px'} objectFit={'cover'}/>
                    <Box pos={'absolute'} left={0} top={0} w={'100%'} h={'100%'} borderRadius={'30px'} boxShadow={"inset 0 0 8px 5px black"}/>
                </Box>
            </Flex>

            <Box w={1} h={'200px'}/>

        </VStack>
    );
};

export default VMainPage;
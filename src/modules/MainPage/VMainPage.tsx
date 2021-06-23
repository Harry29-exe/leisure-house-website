import React from 'react';
import {Box, Center, HStack, Image, useColorModeValue, VStack} from "@chakra-ui/react";
import main from "../../resources/main.jpg";
import TextSection from "../utils/TextSection";
import img1 from "../../resources/img1.jpg";
import img2 from "../../resources/img2.jpg";
import wood from "../../resources/wood.jpg";
import wood2 from "../../resources/wood2.jpg";


const VMainPage = () => {
    const bg = useColorModeValue("primary.20", "primary.900");

    return (
        <VStack w='100%' bgImage={wood} backgroundRepeat={'repeat'} spacing={10}>
            <VStack w='100%' spacing={0}>
                <Box pos='relative' w='100%' h='200px' boxShadow={'0 3px 20px 3px black'}>
                    <Image src={main} pos='absolute' top={0} left={0} w='100%' h='100%'
                           alt={'main photo'}  objectFit='cover'/>


                    <Center pos='absolute' top={0} left={0} w='100%' h='100%' color='white' textAlign='center' boxShadow={"inset 0 -2px 8px 5px black"}
                            fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black'>
                            Majdan zachorodyński
                    </Center>
                </Box>
            </VStack>

            <Box w={['95%', '85%', '80%']} fontSize='1.7rem'  p={6} border={'2px solid white'} borderRadius={'3xl'} pos='relative' zIndex={1}>
                <p style={{display: 'inline-block'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies posuere nibh, id ullamcorper orci gravida non. Vestibulum rhoncus imperdiet mauris, eu auctor est
                    pharetra dictum. Vivamus rutrum molestie felis sit amet ornare. Donec auctor felis ut elit dignissim varius. Morbi velit purus, lobortis imperdiet arcu quis, feugiat vestibulum massa.
                    Donec consectetur varius porttitor.
                    <Image w={['100%', null, '50%']} src={img1} borderRadius={'lg'} filter={"drop-shadow(0 0 10px white)"} float={['none', null, 'left']} m={['auto', null, 5]}/>
                    Curabitur elementum, massa at placerat sodales, diam risus cursus nisl, quis commodo tellus quam eu mi. Sed semper lacinia orci, ut tempor felis vulputate sit amet.
                    Duis id risus congue, lacinia eros eu, pharetra sem. Quisque varius id purus id eleifend. Aenean pretium euismod odio quis lobortis. Donec ut urna at felis sodales condimentum
                    a ac erat. Donec congue euismod dui, eget laoreet massa.
                    Quisque sed metus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at bibendum nisi. Cras sodales blandit tortor,
                    at tempus metus fermentum id. Aliquam dignissim nibh nec nibh fringilla, a ultricies sem faucibus. Integer placerat hendrerit eros, a suscipit metus porta sed.
                    <Image w={['100%', null, '50%']} src={img2} borderRadius={'lg'} filter={"drop-shadow(0 0 10px white)"} float={['none', null, 'right']} m={['auto', null, 5]}/>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus orci nunc, porta vel urna sit amet, consequat dignissim urna. Curabitur ligula libero,
                    dictum non mollis in, convallis quis augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget bibendum mi, sed iaculis lacus. Aliquam eu auctor tortor. Nam sed tincidunt
                    arcu, ut elementum enim. Ut vitae arcu eu ante rutrum convallis.
                </p>
                <Box pos='absolute' left={0} top={0} w={'100%'} h={'100%'} bg={bg} borderRadius={'3xl'} opacity={0.8} zIndex={-1}/>
            </Box>

            <Center w={['95%', '85%', '80%']} borderRadius={'30px'} boxShadow={"0 0 8px 5px black"} pos={'relative'}>
                <Image src={img2} borderRadius={'30px'} />
                <Box pos={'absolute'} left={0} top={0} w={'100%'} h={'100%'} borderRadius={'30px'} boxShadow={"inset 0 0 8px 5px black"}/>
            </Center>

            <Box w={1} h={'200px'}/>

        </VStack>
    );
};

export default VMainPage;
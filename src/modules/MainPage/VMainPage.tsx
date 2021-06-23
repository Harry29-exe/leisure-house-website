import React from 'react';
import {Box, Center, Image, VStack} from "@chakra-ui/react";
import main from "../../resources/main.jpg";
import TextSection from "../utils/TextSection";

const VMainPage = () => {
    return (
        //#4CB56F
        <VStack w='100%'>
            <Box pos='relative' w='100%' h='300px'>
                <Image src={main} pos='absolute' top={0} left={0} w='100%' h='100%'
                       alt={'main photo'}  objectFit='cover'/>


                <Center pos='absolute' top={0} left={0} w='100%' h='100%' color='white'
                        fontFamily='Lobster' fontSize='100px' textShadow='3px 3px 5px black'>
                        Majdan zachorodyński
                </Center>
            </Box>

            <Center w='80%' fontSize='1.7rem'>
                <TextSection test={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies posuere nibh, id ullamcorper orci gravida non. Vestibulum rhoncus imperdiet mauris, eu auctor est pharetra dictum. Vivamus rutrum molestie felis sit amet ornare. Donec auctor felis ut elit dignissim varius. Morbi velit purus, lobortis imperdiet arcu quis, feugiat vestibulum massa. Donec consectetur varius porttitor. Curabitur elementum, massa at placerat sodales, diam risus cursus nisl, quis commodo tellus quam eu mi. Sed semper lacinia orci, ut tempor felis vulputate sit amet. Duis id risus congue, lacinia eros eu, pharetra sem. Quisque varius id purus id eleifend. Aenean pretium euismod odio quis lobortis. Donec ut urna at felis sodales condimentum a ac erat. Donec congue euismod dui, eget laoreet massa.\n\n"+
                    "Quisque sed metus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at bibendum nisi. Cras sodales blandit tortor, at tempus metus fermentum id. Aliquam dignissim nibh nec nibh fringilla, a ultricies sem faucibus. Integer placerat hendrerit eros, a suscipit metus porta sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus orci nunc, porta vel urna sit amet, consequat dignissim urna. Curabitur ligula libero, dictum non mollis in, convallis quis augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget bibendum mi, sed iaculis lacus. Aliquam eu auctor tortor. Nam sed tincidunt arcu, ut elementum enim. Ut vitae arcu eu ante rutrum convallis."
                }/>
            </Center>
        </VStack>
    );
};

export default VMainPage;
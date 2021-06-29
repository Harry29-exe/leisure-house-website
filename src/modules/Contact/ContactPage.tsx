import React from 'react';
import {Box, VStack} from "@chakra-ui/react";
import PageTitle from "../utils/PageTitle";
import TextSection from "../utils/TextSection";

const ContactPage = () => {
    return (
        <VStack>
            <PageTitle title={"Dojazd"}/>
            <Box w={['100%', '90%', '80%']} p={[2,5,6]} pos={'relative'} zIndex={1} overflow='hidden' borderRadius={'2xl'}>
                <Box overflow='hidden' borderRadius={'2xl'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19963.208407614584!2d22.65823545!3d51.2853433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1624640287836!5m2!1spl!2spl"
                        width="100%" height="450" loading="lazy"></iframe>
                </Box>

                <Box w='100%' h='100%' pos='absolute' bg={"primary.600"} opacity={0.8} top={0} left={0} zIndex={-1}/>
            </Box>



            <PageTitle title={"Kontakt"}/>
            <TextSection title={"Kontakt"}>
                Siedlisko ZAŚCIANEK<br/>
                Majdan Zahorodyński 19<br/>
                22-130 Siedliszcze<br/>
                <br/>
                tel. 699 713 745<br/>
                <br/>
                e-mail: info@zascianekzahorodynski.pl<br/>
                www.zascianekzahorodynski.pl<br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                (formularz kontaktowy)

            </TextSection>



            <Box w={1} h={20}/>

        </VStack>
    );
};

export default ContactPage;
import React, {useEffect, useState} from 'react';
import {Box, VStack} from "@chakra-ui/react";
import PageTitle from "../utils/PageTitle";
import TextSection, {convertJsonText} from "../utils/TextSection";

interface ContactPageModel {
    googleMapsSrc: string,
    contact: string,
    telephone: string,
    email: string
}

const ContactPage = () => {
    const [model, setModel] = useState<ContactPageModel>();

    useEffect(() => {
        fetch('/config/kontakt.json')
            .then(response => response.json())
            .then(pageText => setModel(pageText))
    }, [setModel])

    if(!model) {
        return <></>
    }

    return (
        <VStack>
            <PageTitle title={"Dojazd"}/>
            <Box w={['100%', '90%', '80%']} p={[2, 5, 6]} pos={'relative'} zIndex={1} overflow='hidden'
                 borderRadius={'2xl'}>
                <Box overflow='hidden' borderRadius={'2xl'}>
                    <iframe src={model.googleMapsSrc}
                        width="100%" height="450" loading="lazy"/>
                </Box>

                <Box w='100%' h='100%' pos='absolute' bg={"primary.600"} opacity={0.8} top={0} left={0} zIndex={-1}/>
            </Box>


            <PageTitle title={"Kontakt"}/>
            <TextSection title={"Kontakt"}>
                {convertJsonText(model.contact)}
                    Telefon: <a href={`tel:${model.contact}`} style={{textDecoration: 'underline'}}>{model.telephone}</a>
                    <br/>
                    Email: <a href={`mailto:${model.email}`} style={{textDecoration: 'underline'}}>{model.email}</a>
            </TextSection>


            <Box w={1} h={20}/>

        </VStack>
    );
};

export default ContactPage;
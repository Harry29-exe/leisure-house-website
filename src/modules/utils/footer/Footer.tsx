import React, {useEffect, useState} from 'react';
import {Box, Center, Flex, Link} from "@chakra-ui/react";
import TextSection, { convertJsonText } from "../TextSection";

class FooterModel {
    public googleLink?: string;
    public contact?: string;
    public email?: string;
    public telephone?: string;
    public socialMedia?: {name: string, link: string, color: string}[];


    constructor(googleLink?: string, contact?: string, email?: string, telephone?: string, socialMedia?: { name: string; link: string; color: string }[]) {
        this.googleLink = googleLink;
        this.contact = contact;
        this.email = email;
        this.telephone = telephone;
        this.socialMedia = socialMedia;
    }
}

const Footer = () => {
    const [model, setModel] = useState<FooterModel>(new FooterModel());

    useEffect(() => {
        let contactAndMap = fetch('/config/kontakt.json')
            .then(response => response.json())
            .then(contact => {
                model.googleLink = contact.googleMapsSrc;
                model.contact = contact.contact;
                model.email = contact.email;
                model.telephone = contact.telephone;
            });

        let socialMediaPromise = fetch('config/social_media.json')
            .then(response => response.json())
            .then(socialMedia => model.socialMedia = socialMedia);

        Promise.all([contactAndMap, socialMediaPromise])
            .then(() => setModel(new FooterModel(model.googleLink, model.contact, model.email, model.telephone, model.socialMedia)));
    }, [setModel])

    if(!model.socialMedia || !model.googleLink || !model.contact) {
        return <></>
    }

    return (
        <Flex justifyContent='center' w='100%' flexDirection='row' flexWrap='wrap' pos='relative' zIndex={1}
              py={6} px={[2, 4, 2, 6, 10]} borderTop={'2px solid white'} mt={'50px'} >

            <Box overflow='auto' borderRadius={'2xl'} minH={'300px'}
                 w={['350px', '450px', '350px', '450px', '50%']} mx={[0, 6, null, 4, 10]} my={[4, 0]} >
                <iframe src={model.googleLink}
                        width="100%" height="100%" loading="lazy"/>
            </Box>

            <Box w={['350px', '450px', '300px', '420px']} fontSize={['1rem', null, null, '20px']} mx={[0, 6, null, 4, 10]} my={[4, 4, 4, 0]} fontWeight={400} textOverflow={'wrap'}>
                {convertJsonText(model.contact)}
                Telefon: <a href={`tel:${model.telephone}`} style={{textDecoration: 'underline'}}>{model.telephone}</a>
                <br/>
                Email: <a href={`mailto:${model.email}`} style={{textDecoration: 'underline'}}>{model.email}</a>

                <Flex w='100%' flexWrap='wrap' justifyContent={'center'}>
                    {
                        model.socialMedia.map(
                            sm => <SocialMedium name={sm.name} color={sm.color} link={sm.link}/>
                        )
                    }
                </Flex>
            </Box>

            <Box pos='absolute' left={0} top={0} w={'100%'} h={'100%'} bg={`#2A653C`} opacity={0.8} zIndex={-1}/>
        </Flex>
    );
};

const SocialMedium = (props: {name: string, color: string, link: string}) => {
    return (
        <Center as={Link} href={"https://facebook.com"} border={"2px solid"} m={[4, null, '2.5%']}
              minW={['100%', null, null, '45%']} pos='relative' zIndex={1} overflow='hidden'
              borderColor={"white"} borderRadius={'xl'} minH='60px' isExternal>
            {props.name}
            <Box pos='absolute' w='100%' h='100%' opacity={0.5} bg={props.color} zIndex={-1}/>
        </Center>
    );
} ;

export default Footer;
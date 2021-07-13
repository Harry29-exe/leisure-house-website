import React, {useEffect, useState} from 'react';
import {Box, Center, Flex, Link} from "@chakra-ui/react";
import TextSection, { convertJsonText } from "../TextSection";

class FooterModel {
    public googleLink?: string;
    public contact?: string;
    public socialMedia?: {name: string, link: string, color: string}[];

    constructor(googleLink?: string, contact?: string, socialMedia?: {name: string, link: string, color: string}[]) {
        this.googleLink = googleLink;
        this.contact = contact;
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
            });

        let socialMediaPromise = fetch('config/social_media.json')
            .then(response => response.json())
            .then(socialMedia => model.socialMedia = socialMedia);

        Promise.all([contactAndMap, socialMediaPromise])
            .then(() => setModel(new FooterModel(model.googleLink, model.contact, model.socialMedia)));
    }, [setModel])

    if(!model.socialMedia || !model.googleLink || !model.contact) {
        return <></>
    }

    return (
        <Flex justifyContent='center' w='100%' flexDirection='row' flexWrap='wrap' pos='relative' zIndex={1}
              py={6} px={[2, 4, 2, 6, 10]} borderY={'2px solid white'} mb={'80px'}>

            <Box overflow='auto' borderRadius={'2xl'} minH={'450px'}
                 w={['350px', '450px', '350px', '400px', '700px']} mx={[0, 6, null, 4, 10]} my={[4, 0]} >
                <iframe src={model.googleLink}
                        width="100%" height="100%" loading="lazy"/>
            </Box>

            <Box w={['350px', '450px', '300px', '420px']} mx={[0, 6, null, 4, 10]} my={[4, 0]} fontSize={'1.5rem'} fontWeight={400} textOverflow={'wrap'}>
                {convertJsonText(model.contact)}
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
        <Link as={Center} href={"https://facebook.com"} border={"2px solid"} m={[4, null, '2.5%']}
              minW={['100%', null, null, '45%']}
              borderColor={"white"} borderRadius={'xl'} minH='60px' bg={props.color}>
            {props.name}
        </Link>
    );
};

export default Footer;
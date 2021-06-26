import React from 'react';
import {AttractionModel} from "./AttractionsPresenter";
import TextSection from "../MainPage/TextSection";
import {VStack} from "@chakra-ui/react";
import AppImage from "../utils/AppImage/AppImage";
import {websiteAddress} from "../../config/Address";

const Attraction = (props: {attraction: AttractionModel}) => {
    return (
        <VStack spacing={10}>
            <TextSection title={props.attraction.name}>
                {props.attraction.description}
            </TextSection>
            {props.attraction.images.map(img =>
                <AppImage key={img} img={websiteAddress + '/' + img}
                          w={['90%', '85%', '80%', '70%']} maxH={['250px', '450px', '600px']} borderRadius={'2xl'}/>
                )}

        </VStack>
    );
};

export default Attraction;
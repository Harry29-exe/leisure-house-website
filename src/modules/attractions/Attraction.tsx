import React from 'react';
import {AttractionModel} from "./AttractionsPresenter";
import TextSection from "../utils/TextSection";
import {Flex, useBreakpointValue, VStack} from "@chakra-ui/react";
import AppImage from "../utils/AppImage/AppImage";
import {websiteAddress} from "../../config/Address";

const maxH = ['250px', '450px', '550px'];

const Attraction = (props: { attraction: AttractionModel }) => {
    const isMobile = useBreakpointValue({base: true, lg: false})
    let images = props.attraction.images;
    let key = 0;
    return (
        <VStack spacing={10} w='100%'>
            <TextSection title={props.attraction.name}>
                {props.attraction.description.split("\n").map(
                    t => <div key={key++}>{t}<br/></div>
                )}
            </TextSection>


            {isMobile ?
                props.attraction.images.map(img =>
                    <AppImage key={img} img={websiteAddress + 'images/' + img}
                              w={['90%', '85%', '80%', '70%']} maxH={maxH} borderRadius={'2xl'}/>
                )
                :
                images.length % 2 === 0 ?
                    <Flex justifyContent='space-around' flexWrap='wrap' w={'90%'} flexDirection='row'>
                        {props.attraction.images.map(img =>
                            <AppImage key={img} img={websiteAddress + 'images/' + img}
                                      w='45%' m='2.5%' maxH={maxH} borderRadius={'2xl'}/>
                        )}
                    </Flex>
                    :
                    <Flex justifyContent='space-around' flexWrap='wrap' w={'90%'} flexDirection='row'>
                        {props.attraction.images.slice(0, images.length - 1).map(img =>
                            <AppImage key={img} img={websiteAddress + 'images/' + img}
                                      w='45%' m='2.5%' maxH={maxH} borderRadius={'2xl'}/>
                        )}
                        <AppImage key={images[images.length - 1]} img={websiteAddress + 'images/' + images[images.length - 1]}
                                  w='95%' m='2.5%' maxH={maxH} borderRadius={'2xl'}/>
                    </Flex>
            }

        </VStack>
    );
};

export default Attraction;
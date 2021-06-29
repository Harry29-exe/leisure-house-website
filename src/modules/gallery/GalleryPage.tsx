import React, {useState} from 'react';
import {Box, Flex, Spinner, VStack} from "@chakra-ui/react";
import {websiteAddress} from "../../config/Address";
import AppImage from "../utils/AppImage/AppImage";
import PageTitle from "../utils/PageTitle";
import GalleryImage from "../utils/GalleryImage/GalleryImage";

const fetchImageList = async (): Promise<string[]> => {
    let data = await fetch(websiteAddress + "/config/zdjecia.json").then(response => response.json());
    console.log(data);
    return data;
}

const GalleryPage = () => {
    const [imageList, setImageList] = useState<string[] | null>(null);

    if(!imageList) {
        fetchImageList().then(images => setImageList(images));
    }
    return (
        <VStack>
            <PageTitle title={"Galeria"}/>

            {imageList?
                <Flex justifyContent='center' flexWrap='wrap' w='90%' spacing={20}>
                    {
                        imageList.map(
                            img => <GalleryImage key={img} maxH={'300px'} img={websiteAddress + "/images/" + img}/>
                        )
                    }
                </Flex>
                :
                <Spinner size={'xl'}/>
            }

            <Box w={1} h={20}/>
        </VStack>
    );
};

export default GalleryPage;
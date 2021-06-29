import React, {useState} from 'react';
import {Box, Spinner, VStack} from "@chakra-ui/react";
import {websiteAddress} from "../../config/Address";
import AppImage from "../utils/AppImage/AppImage";
import PageTitle from "../utils/PageTitle";

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
                <VStack w='90%' spacing={20}>
                    {
                        imageList.map(
                            img => <AppImage w={['100%', '90%', '70%', '60%']} maxH={'400px'} img={websiteAddress + "/images/" + img}/>
                        )
                    }
                </VStack>
                :
                <Spinner size={'xl'}/>
            }

            <Box w={1} h={20}/>
        </VStack>
    );
};

export default GalleryPage;
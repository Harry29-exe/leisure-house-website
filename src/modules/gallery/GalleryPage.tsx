import React, {useState} from 'react';
import {Box, Flex, Spinner, useDisclosure, VStack} from "@chakra-ui/react";
import {websiteAddress} from "../../config/Address";
import PageTitle from "../utils/PageTitle";
import GalleryImage from "../utils/GalleryImage/GalleryImage";
import GalleryModal from "./GalleryModal";

const fetchImageList = async (): Promise<string[]> => {
    let data = await fetch(websiteAddress + "/config/zdjecia.json").then(response => response.json());
    console.log(data);
    return data;
}

const GalleryPage = () => {
    const [imageList, setImageList] = useState<string[] | null>(null);
    const [activeImageIndex, setActiveImage] = useState<number>(0);
    const {isOpen, onOpen, onClose} = useDisclosure();

    if (!imageList) {
        fetchImageList().then(images => setImageList(images));
    }


    let imgIndex = 0;
    return (
        <>
            <VStack>
                <PageTitle title={"Galeria"}/>

                {imageList ?
                    <Flex justifyContent='center' flexWrap='wrap' w='90%' spacing={20}>
                        {
                            imageList.map(
                                img => <GalleryImage onClick={(index: number) => {
                                    setActiveImage(index);
                                    onOpen();
                                }}
                                                     key={img} maxH={'300px'}
                                                     imgIndex={imgIndex++}
                                                     img={websiteAddress + "/images/" + img}/>
                            )
                        }
                    </Flex>
                    :
                    <Spinner size={'xl'}/>
                }


                <Box w={1} h={20}/>
            </VStack>

            <GalleryModal isOpen={isOpen} onClose={onClose}
                          imagesArray={imageList? imageList: []} activeImage={activeImageIndex} />
        </>
    );
};

export default GalleryPage;
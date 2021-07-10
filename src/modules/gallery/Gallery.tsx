import React, {useState} from "react";
import {Box, Center, Image} from "@chakra-ui/react";
import {BiLeftArrow, BiRightArrow, BiRightArrowAlt, BiRightArrowCircle} from "react-icons/all";
import {websiteAddress} from "../../config/Address";

interface GalleryProps {
    images: string[],
    activeImageIndex: number
}

export const Gallery = (props: GalleryProps) => {
    const images = props.images;
    const [activeImage, setActiveImage] = useState<number>(props.activeImageIndex);

    const nextImage = () => setActiveImage(activeImage + 1 >= images.length? 0: activeImage+1);

    const prevImage = () => setActiveImage(activeImage - 1 <= 0? images.length - 1: activeImage - 1);

    return (
        <Box w='100%' h='100%' pos='relative' borderRadius={'2xl'} overflow='hidden'>

            <ImageChangeButton onClick={nextImage} direction='left'/>

            <Center w='100%' h='100%'  pos={'relative'} top={0} left='0%'>
                <Image maxH='100%' h='100%' w='100%' objectFit='contain'
                       src={`${websiteAddress}/images/${images[activeImage]}`} alt={images[activeImage]}
                />
            </Center>

            <ImageChangeButton onClick={prevImage} direction={'right'}/>

        </Box>
    );
};

const ImageChangeButton = (props: {onClick: () => void, direction: "left" | "right"}) => {
    const isLeft = props.direction === 'left';
    return (
        <Center pos={'absolute'} top={'12.5%'} left={isLeft? 0: '90%'} w={'10%'} h='75%' zIndex={10}
                overflow='hidden'
                opacity={0.7} _hover={{opacity: 1, cursor: 'pointer', background: "whiteAlpha.400"}}
                borderRadius={'xl'}
                onClick={props.onClick}>

            {isLeft ?
                <BiLeftArrow fontSize='2rem'/>
                :
                <BiRightArrow fontSize='2rem'/>
            }

            {/*<Box pos='absolute' w='100%' h='100%' bg={"primary.800"} zIndex={-1}*/}
            {/*     opacity={0} _hover={{opacity: 0.65}}/>*/}
        </Center>
    );
};

export default Gallery;
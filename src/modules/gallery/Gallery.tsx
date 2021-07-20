import React, {useRef, useState} from "react";
import {Box, Center, Image, Spinner} from "@chakra-ui/react";
import {BiLeftArrow, BiRightArrow} from "react-icons/all";
import {websiteAddress} from "../../config/Address";

interface GalleryProps {
    images: string[],
    activeImageIndex: number
}

export const Gallery = (props: GalleryProps) => {
    const images = props.images;
    const [activeImage, setActiveImage] = useState<number>(props.activeImageIndex);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const isLoadedRef = useRef<boolean>(true)

    const nextImage = () => {
        isLoadedRef.current = false;
        setActiveImage(activeImage + 1 >= images.length ? 0 : activeImage + 1);
        setTimeout(
            () => {
                if (!isLoadedRef) {
                    setLoaded(false);
                }
            }, 100
        )
    }

    const prevImage = () => {
        setActiveImage(activeImage - 1 <= 0 ? images.length - 1 : activeImage - 1);
        setTimeout(
            () => {
                if (!isLoadedRef) {
                    setLoaded(false);
                }
            }, 100
        )
    }

    const onLoad = () => {
        isLoadedRef.current = true;
        if (!isLoaded) {
            setLoaded(true);
        }
    }

    return (
        <Box w='100%' h='100vh' pos='relative' borderRadius={'2xl'} overflow='hidden'>

            <ImageChangeButton onClick={prevImage} direction='left'/>

            <Center pos='relative' w='100%' h='100%' top={0} left={0}>
                <Image maxH='100%' h='100%' w='100%' objectFit='contain' onLoad={onLoad}
                       src={`${websiteAddress}/images/${images[activeImage]}`} alt={images[activeImage]}
                />

                {!isLoaded &&
                <Center pos='absolute' top={0} left={0} w='100%' h='100%'>
                    <Spinner minH={'250px'} minW={'250px'} thickness={'15px'} speed={'1s'}
                             color={'primary.600'} emptyColor={'gray.600'}/>
                </Center>
                }
            </Center>

            <ImageChangeButton onClick={nextImage} direction={'right'}/>

        </Box>
    );
};

const ImageChangeButton = (props: { onClick: () => void, direction: "left" | "right" }) => {
    const isLeft = props.direction === 'left';
    return (
        <Center pos={'absolute'} left={isLeft ? 0 : 'auto'} right={!isLeft? 0: 'auto'} w={'10%'} minW={'75px'}
                h={['50%', null, '60%', '75%']} top={['25%', null, '20%', '12.5%']} zIndex={10}
                overflow='hidden'
                opacity={0.9} _hover={{opacity: 1, cursor: 'pointer', background: "whiteAlpha.400"}}
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
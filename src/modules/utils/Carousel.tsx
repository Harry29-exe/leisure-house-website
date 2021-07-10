import React, {useState} from 'react';
import {Box, Center, ChakraProps, HStack, Image} from "@chakra-ui/react";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import AppImage from "./AppImage/AppImage";

type CarouselProps = ChakraProps & { images: string[] }

const Carousel = (props: CarouselProps) => {
    const {images, ...style} = props;
    const transitionTime = 0.3;
    const [state, setState] = useState<{ shift: number, prev: number }>({shift: 0, prev: images.length});
    const setShift = (shift: number) => {
        setState({shift: shift, prev: state.shift});
    }

    style.w = style.w ? style.w : style.width ? style.width : '100px';
    style.h = style.h ? style.h : style.height ? style.height : '100px';

    const nextImage = () => {
        if (state.shift >= images.length - 1) {
            setTimeout(() => setState({shift: 0, prev: images.length}), transitionTime * 1000);
        }
        setShift(state.shift + 1);
    }

    const previousImage = () => {
        if (state.shift === 0) {
            setState({shift: images.length, prev: 0})
            setTimeout(() => setShift(images.length - 1), 10);
        } else {
            setShift(state.shift - 1);
        }
    }

    const noTransition = (): boolean => {
        let transition = (state.shift === 0 && state.prev === images.length) || (state.shift === images.length && state.prev === 0);
        console.log(state.shift, state.prev);
        console.log(transition);
        return transition;
    }

    const imageWidth = 100 / (images.length + 1);

    return (
        <Box {...style} pos='relative' overflow='hidden' boxShadow={["0 0 5px 3px white", null, "0 0 8px 5px white"]}
             zIndex={1}>
            <HStack h='100%' w={`${(images.length + 1) * 100}%`} spacing={0}
                    transform={`translate(${-state.shift * imageWidth}%, 0)`} pos='relative' top={0} left={0}
                    transition={`transform ${noTransition() ? 0 : transitionTime}s`}>
                {images.map(
                    img => <AppImage key={img} img={img} objectFit='cover' h='100%' w={`${imageWidth}%`}
                                     userSelect='none'/>
                )}
                <Image src={images[0]} objectFit='cover' h='100%' w={`${imageWidth}%`} userSelect='none'/>

            </HStack>

            <Center onClick={() => previousImage()} _hover={{cursor: 'pointer', bg: "whiteAlpha.400", opacity: 1}}
                    opacity={0} pos='absolute' top='0' h='100%' left={0} w={['20%', '15%', '10%']} m={0} p={0}
                    transition='opacity 0.5s'>
                <ArrowLeftIcon fontSize='25px'/>
            </Center>
            <Center onClick={() => nextImage()} _hover={{cursor: 'pointer', bg: "whiteAlpha.400", opacity: 1}}
                    opacity={0} pos='absolute' top='0' h='100%' left={['80%', '85%', '90%']} w={['20%', '15%', '10%']}
                    m={0} p={0} transition='opacity 0.5s'>
                <ArrowRightIcon fontSize='25px'/>
            </Center>


        </Box>
    );
};

export default Carousel;
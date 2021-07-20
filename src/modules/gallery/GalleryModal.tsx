import React from 'react';
import {Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {Gallery} from "./Gallery";

interface GalleryModalParams {
    isOpen: boolean;
    onClose: () => void;
    imagesArray: string[],
    activeImage: number
}

const GalleryModal = (props: GalleryModalParams) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size='full'
               allowPinchZoom motionPreset={"scale"}>
            <ModalOverlay/>

            <ModalContent background={'#ffffff00'} p={0} m={0} motionPreset={"none"}>

                <ModalBody w='100%' h='100vh' p={0} m={0}>

                    <Gallery activeImageIndex={props.activeImage} images={props.imagesArray}/>

                    <Box pos='absolute' w='100%' h='100%' top={0} left={0} bg={'gray.700'} opacity={1} zIndex={-1}/>
                </ModalBody>

                <ModalCloseButton onClick={props.onClose} fontSize={'1.5rem'}/>

            </ModalContent>
        </Modal>
    );
};


export default GalleryModal;
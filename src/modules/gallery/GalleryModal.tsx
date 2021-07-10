import React from 'react';
import {
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {Gallery} from "./Gallery";

interface GalleryModalParams {
    isOpen: boolean;
    onClose: () => void;
    imagesArray: string[],
    activeImage: number
}

const GalleryModal = (props: GalleryModalParams) => {
    return (
        <Drawer isOpen={props.isOpen} onClose={props.onClose} size='full'>
            <DrawerOverlay/>

            <DrawerContent  bg={"primary.600"} p={0} m={0}>
                <DrawerHeader>
                    <DrawerCloseButton onClick={props.onClose} fontSize={'1.5rem'}/>
                </DrawerHeader>

                <DrawerBody w='100%' h='90%' p={0} m={0}>
                    <Gallery activeImageIndex={props.activeImage} images={props.imagesArray}/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};


export default GalleryModal;
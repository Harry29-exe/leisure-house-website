import React from 'react';
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";

const NewsModal = (props: {onClose: any, isOpen: any, title: string, content: string}) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size='6xl' isCentered>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    {props.title}
                </ModalHeader>
                <ModalCloseButton/>

                <ModalBody bg={"primary.500"}>
                    {props.content}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NewsModal;
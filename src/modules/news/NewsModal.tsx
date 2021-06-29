import React from 'react';
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";

const NewsModal = (props: {onClose: any, isOpen: any, title: string, content: string}) => {

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size='6xl' isCentered>
            <ModalOverlay/>
            <ModalContent bg={"primary.600"} borderRadius={'3xl'} p={[3,4,5]}>
                <ModalHeader fontSize={'1.5rem'}>
                    {props.title}
                </ModalHeader>

                <ModalCloseButton size={'lg'}/>

                <ModalBody fontSize={'1.1rem'}>
                    {props.content}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NewsModal;
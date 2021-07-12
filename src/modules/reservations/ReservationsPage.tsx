import {Box, VStack} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import PageTitle from "../utils/PageTitle";
import ReservationsCalendar from "./ReservationsCalendar";
import TextSection, {convertJsonText} from "../utils/TextSection";

interface ReservationPageText {
    reservationsText: string,
    paymentText: string
}

const ReservationsPage = () => {
    const [model, setModel] = useState<ReservationPageText>();
    useEffect(() => {
        fetch('config/rezerwacje_info.json')
            .then(response => response.json())
            .then(pageText => setModel(pageText))
    }, [setModel])

    return (
        <VStack spacing={8}>
            <PageTitle title={"Kalendarz rezerawacji"}/>

            <TextSection title={"Rezerwacje"}>
                {model &&
                    convertJsonText(model.reservationsText)
                }

            </TextSection>

            <ReservationsCalendar/>

            <TextSection title={"Płatność"}>

                {model &&
                    convertJsonText(model.paymentText)
                }

            </TextSection>

            <Box w={1} h={10}/>
        </VStack>
    );
};

export default ReservationsPage;
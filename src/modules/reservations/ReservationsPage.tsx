import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import PageTitle from "../utils/PageTitle";
import ReservationsCalendar from "./ReservationsCalendar";
import TextSection from "../utils/TextSection";

const ReservationsPage = () => {
    return (
        <VStack>
            <PageTitle title={"Kalendarz rezerawacji"}/>
            <ReservationsCalendar/>

            <TextSection title={"Rezerwacje"}>
                Ośrodek dysponuje domkami do 12 miejsc, z salonem, sypialnią, samodzielną w pełni wyposażoną kuchnią, łazienką i dostępem do wi-fi
                <br/><br/>
                Cena za nocleg: 45-60 zł od osoby
                <br/>
                Dzieci do 3 lat gratis, od 3 do 7 lat połowa ceny.

            </TextSection>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <TextSection title={"Płatność"}>
                Płatność:<br/>
                <br/>
                1.	PRZELEW NA KONTO:<br/>
                Bank Spółdzielczy w Lubartowie<br/>
                67 8707 0006 0500 9297 2000 0001<br/>
                <br/>
                2.	GOTÓWKA<br/>
                <br/>
                3.	BON TURYSTYCZNY


            </TextSection>

            <Box w={1} h={10}/>
        </VStack>
    );
};

export default ReservationsPage;
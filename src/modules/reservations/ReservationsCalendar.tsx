import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import {Box, Flex, Spinner, VStack} from "@chakra-ui/react";
import {websiteAddress} from "../../config/Address";

interface Reservations {
    from: Date,
    to: Date
}

interface FetchedReservation {
    from: number[],
    to: number[]
}

const fetchDates = async (): Promise<Reservations[]> => {
    let fetchedReservations: FetchedReservation[] = await fetch(websiteAddress + '/config/rezerwacje.json').then(response => response.json());
    let reservations: Reservations[] = [];
    fetchedReservations.forEach(
        fr => reservations.push({
            from: new Date(fr.from[0], fr.from[1] - 1, fr.from[2]),
            to: new Date(fr.to[0], fr.to[1] - 1, fr.to[2])
        })
    )

    console.log(reservations);
    return Promise.resolve(reservations);
}

const ReservationsCalendar = () => {
    const [reservations, setReservations] = useState<Reservations[] | null>(null);
    if (!reservations) {
        fetchDates().then(
            value => setReservations(value)
        )
    }

    const isDisabled = (props: { activeStartDate: any, date: any, view: any }): boolean => {
        if (!reservations) {
            return false;
        }

        let currentDate = props.date.getTime();

        for (let i = 0; i < reservations.length; i++) {
            let reservation = reservations[i];
            if (reservation.from.getTime() - currentDate <= 0 && reservation.to.getTime() - currentDate >= 0) {
                return true;
            }
        }
        return false;
    }

    return (
        <Box w={['100%', '300px', '400px', '800px', '1000px']}>
            {reservations ?
                <VStack w='100%'>
                    <Calendar tileDisabled={isDisabled} locale='pl-PL'/>

                    <Flex w='100%' p={4} fontSize={'25px'} justifyItems={'center'} flexWrap='wrap' pos='relative'
                          border={'2px solid white'} borderRadius={'2xl'} overflow={'hidden'} zIndex={1}>
                        <Box display='inline-block' bg={'#08a1d2'} w='25px' h='25px' mx={5} my={1} borderBottom={'1px solid white'} borderRadius={'sm'}/>
                        - terminy zajęte

                        <Box w={'100%'} h={1}/>

                        <Box display='inline-block' bg={'primary.500'} w='25px' h='25px' mx={5} my={1}
                             borderRadius={'sm'}/>
                        - terminy wolne

                        <Box pos='absolute' w='100%' h='100%' top={0} left={0} bg={'primary.700'} zIndex={-1}
                             opacity={0.9}/>
                    </Flex>
                </VStack>
                :
                <VStack color='white' fontSize={'2em'}>
                    <Spinner size={'xl'}/>
                    <Box>Ładujemy kalendarz</Box>
                </VStack>
            }
        </Box>
    );
};

export default ReservationsCalendar;
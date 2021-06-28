import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import {Box, Spinner, VStack} from "@chakra-ui/react";
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
        fr => reservations.push({from: new Date(fr.from[0], fr.from[1] - 1, fr.from[2]), to: new Date(fr.to[0], fr.to[1] - 1, fr.to[2])})
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
        if(!reservations) {
            return false;
        }

        let currentDate = props.date.getTime();

        for(let i = 0; i < reservations.length; i++) {
            let reservation = reservations[i];
            if(reservation.from.getTime() - currentDate <= 0 && reservation.to.getTime() - currentDate >= 0) {
                return true;
            }
        }
        return false;
    }

    return (
        <Box>
            {reservations ?
                <Calendar tileDisabled={isDisabled}/>
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
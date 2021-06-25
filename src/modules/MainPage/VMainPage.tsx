import React from 'react';
import {Box, Center, Flex, Grid, GridItem, HStack, Image, useColorModeValue, VStack} from "@chakra-ui/react";
import main from "../../resources/main.jpg";
import img1 from "../../resources/img1.jpg";
import img2 from "../../resources/img2.jpg";
import Carousel from "../utils/Carousel";
import TextSection from './TextSection';
import ImageWithText from "../utils/ImageWithTextProps";
import Card from "./Card";
import { Link } from 'react-router-dom';
import ImageWithBorder from "../utils/ImageWithBorder";


const VMainPage = () => {
    const bg = useColorModeValue("primary.20", "primary.900");

    return (
        <VStack w='100%' spacing={20}>
            <Box pos='relative' w='100%' minH='10px'>

                <Flex justifyContent='center' justifyItems='center' flexFlow='column' w='100%' h='100%' color='white' textAlign='center'
                        fontFamily='Lobster' fontSize={['35px', '50px', '75px', '100px']} textShadow='3px 3px 5px black'>
                    <Box w='100%'>Majdan zachorodyński</Box>
                    <Box w='100%' fontSize='0.5em'>miejsce blisko natury</Box>
                </Flex>
            </Box>

            <TextSection title={"O nas"} >
                Chcesz uciec od zgiełku, marzysz o ciszy i obcowaniu z naturą   - to urocze, spokojne siedlisko może być spełnieniem marzeń o domku nad jeziorem.
                Ośrodek agroturystyczny ZAŚCIANEK położony jest w Majdanie Zahorodyńskim na Lubelszczyźnie (45 km od Lublina, 28 km od Chełma, 22 km od Łęcznej i 4,5 km od Siedliszcza)
                na obrzeżach Poleskiego Parku Narodowego na pojezierzu łęczyńsko-włodawskim nieopodal Zalewu Zahorodyńskiego  - raju dla wędkarzy i osób pragnących spokojnie wypocząć nad wodą.
            </TextSection>

            <ImageWithBorder img={img2} w={["90%", "85%", "80%"]} maxH={"450px"} borderRadius={"2xl"}/>

            <TextSection title={"Dlaczego warto"}>
                Siedlisko to kompleks prawie stuletnich budynków wraz z udogodnieniami dla turystów, miejsce zjazdów rodzinnych, spotkań, ostoja spokoju dla Rodzin czy grup zorganizowanych.
                Do dyspozycji gości jest również bezpłatny ogrodzony parking, ogromna altana z murowanym grillem i miejscem na ognisko i plac zabaw.
            </TextSection>

            <Center h="200px" w='90%' mx='10%' fontSize={'2rem'} flexFlow='wrap'>
                <Link to={"/reservations"}>
                    <Card img={img1} title={"Atrakcje"} text={"Sprawdz co cię u nas czeka"} w={"350px"} h="400px" m={[3, 4, 5]}/>
                </Link>
                <Link to={"/reservations"}>
                    <Card img={img1} title={"Rezerwacje"} text={"Sprawdz wolne terminy"} w={"350px"} h="400px" m={[3, 4, 5]}/>
                </Link>
                <Link to={"/reservations"}>
                    <Card img={img1} title={"Galeria"} text={"Zobacz "} w={"350px"} h="400px" m={[3, 4, 5]}/>
                </Link>
                <Link to={"/reservations"}>
                    <Card img={img1} title={"Kontakt"} text={"description"} w={"350px"} h="400px" m={[3, 4, 5]}/>
                </Link>
            </Center>



            <Box w={1} h={'2000px'}/>

        </VStack>
    );
};

export default VMainPage;
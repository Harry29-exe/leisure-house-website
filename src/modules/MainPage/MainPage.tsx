import React, {useEffect, useRef, useState} from 'react';
import {Box, Center, VStack} from "@chakra-ui/react";
import TextSection from '../utils/TextSection';
import AppImage from "../utils/AppImage/AppImage";
import {websiteAddress} from "../../config/Address";
import {fetchMainPage, MainPageModel} from "./MainPagePresenter";
import {MainPageHeader} from "./MainPageHeader";
import MainPageSection from "./MainPageSection";

const MainPage = () => {
    const [model, setModel] = useState<MainPageModel>();

    useEffect(() => {
        fetchMainPage().then(fetchedModel => setModel(fetchedModel));
    }, [setModel])

    if (!model) {
        return (
            <VStack w='100%' spacing={20}>
                <MainPageHeader/>
            </VStack>
        )
    }

    return (
        <VStack w='100%' spacing={20}>
            <MainPageHeader/>

            <TextSection title={""}>
                <Center fontFamily="lobster" fontSize="1.2em" textAlign="center">
                    {
                        model.firstParagraph.text
                    }
                </Center>
            </TextSection>

            <AppImage img={`images/${model.firstParagraph.image}`} w={["90%", "85%", "80%", '70%']} maxH={"600px"}
                      borderRadius={"2xl"}/>

            {
                model.paragraphs.map(
                    p => <MainPageSection key={p.title} title={p.title} text={p.text} image={`images/${p.image}`}/>
                )
            }


            {/*<Center h="200px" w='90%' mx='10%' fontSize={'2rem'} flexFlow='wrap'>*/}
            {/*    <Link to={"/reservations"}>*/}
            {/*        <Card img={img1} title={"Atrakcje"} text={"Sprawdz co cię u nas czeka"} w={"350px"} h="400px" m={[3, 4, 5]}/>*/}
            {/*    </Link>*/}
            {/*    <Link to={"/reservations"}>*/}
            {/*        <Card img={img1} title={"Rezerwacje"} text={"Sprawdz wolne terminy"} w={"350px"} h="400px" m={[3, 4, 5]}/>*/}
            {/*    </Link>*/}
            {/*    <Link to={"/reservations"}>*/}
            {/*        <Card img={img1} title={"Galeria"} text={"Zobacz "} w={"350px"} h="400px" m={[3, 4, 5]}/>*/}
            {/*    </Link>*/}
            {/*    <Link to={"/reservations"}>*/}
            {/*        <Card img={img1} title={"Kontakt"} text={"description"} w={"350px"} h="400px" m={[3, 4, 5]}/>*/}
            {/*    </Link>*/}
            {/*</Center>*/}

            <Box w={1} h={20}/>

        </VStack>
    );
};

export default MainPage;
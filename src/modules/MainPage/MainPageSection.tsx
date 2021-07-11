import React from 'react';
import TextSection from "../utils/TextSection";
import AppImage from "../utils/AppImage/AppImage";

interface MainPageProps {
    title: string,
    text: string,
    image: string
}

const MainPageSection = (props: MainPageProps) => {
    return (
        <>
            <TextSection title={props.title}>
                {props.text}
            </TextSection>

            <AppImage img={props.image} w={["90%", "85%", "80%", '70%']} maxH={"600px"}
                      borderRadius={"2xl"}/>
        </>
    );
};

export default MainPageSection;
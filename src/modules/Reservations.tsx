import React from 'react';
import Carousel from "./utils/Carousel";
import img1 from "../resources/img1.jpg"
import img2 from "../resources/img2.jpg"
import main from "../resources/main.jpg"

const Reservations = () => {
    return (
        <div>
            <Carousel images={[img1, img2, main]} w={'400px'} h='200px'/>
        </div>
    );
};

export default Reservations;
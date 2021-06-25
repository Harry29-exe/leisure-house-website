import {websiteAddress} from "../../config/Address";

export interface AttractionModel {
    name: string,
    description: string,
    images: string[]
}

export const fetchAttractions = async (): Promise<AttractionModel[]> => {
    let data = await fetch(websiteAddress + "/attractions.json")
        .then(response => response.json());

    console.log(data);

    return data;
}
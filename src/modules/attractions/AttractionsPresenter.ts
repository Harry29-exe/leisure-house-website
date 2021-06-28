import {websiteAddress} from "../../config/Address";

export interface AttractionModel {
    name: string,
    description: string,
    images: string[]
}

export const fetchAttractions = async (): Promise<AttractionModel[]> => {
    return await fetch(websiteAddress + "/config/atrakcje.json")
        .then(response => response.json());
}
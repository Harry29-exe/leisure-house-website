import {websiteAddress} from "../../config/Address";

export interface NewsModel {
    name: string,
    shortDescription: string,
    description: string,
    image: string
}

export const fetchNews = async (): Promise<NewsModel[]> => {
    return await fetch("/config/aktualnosci.json")
        .then(response => response.json());
}
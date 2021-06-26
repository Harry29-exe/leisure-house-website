import {websiteAddress} from "../../config/Address";

export interface NewsModel {
    name: string,
    shortDescription: string,
    description: string,
    image: string
}

export const fetchNews = async (): Promise<NewsModel[]> => {
    console.log(websiteAddress + "/config.aktualnosci.json")
    let temp = await fetch(websiteAddress + "/config.aktualnosci.json").then(r => r.text());
    console.log(temp)
    let data = await fetch(websiteAddress + "/config.aktualnosci.json")
        .then(response => response.json());

    console.log(data);

    return data;
}
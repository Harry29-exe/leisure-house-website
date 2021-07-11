export interface MainPageModel {
    firstParagraph: {
        text: string,
        image: string
    },
    paragraphs: {title: string, text: string, image: string}[]
}

export const fetchMainPage = async (): Promise<MainPageModel> => {
    return await fetch('config/glowna.json')
        .then(response => response.json());
}
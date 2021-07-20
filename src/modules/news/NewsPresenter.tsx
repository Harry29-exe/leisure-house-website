export interface NewsModel {
    name: string,
    shortDescription: string,
    description: string,
    image: string
}

export interface SocialMediaModel {
    name: string,
    link: string,
    color: string
}

export interface NewsPageModel {
    socialMediaDescription: string,
    news: NewsModel[]
}

export const fetchNews = async (): Promise<NewsPageModel & { socialMedia: SocialMediaModel[] }> => {
    let newsPromise = fetch("/config/aktualnosci.json")
        .then(response => response.json());
    let socialMediaPromise = fetch('config/social_media.json')
        .then(response => response.json());

    return Promise.all([newsPromise, socialMediaPromise])
        .then(data => {
            return {
                socialMediaDescription: data[0].socialMediaDescription,
                news: data[0].news,
                socialMedia: data[1]
            }
        })
}
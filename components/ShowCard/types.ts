export interface IShowType {
    id: number,
    name: string,
    season: number,
    number: number,
    type: string,
    runtime: number,
    rating: {
        average: null | number
    },
    image: null | IimgType
    show: {
        id: number,
        name: string,
        type: string,
        language: string,
        status: string,
        image: null | IimgType
    }
}

interface IimgType {
    medium: string
    original: string
}

export interface IShowCardProps {
    episode: IShowType
}

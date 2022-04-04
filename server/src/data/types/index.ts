export type Image = {
    png: string;
    webp: string;
};

export type TechnologyImages = {
    portrait: string; 
    landscape: string;
};

export type Destinations = {
    id: number;
    name: string;
    images: Image;
    description: string;
    distance: string;
    travel: string;
};

export type Crew = {
    id: number;
    name: string;
    images: Image;
    role: string;
    bio: string;
};

export type Technology = {
    id: number;
    name: string;
    images: TechnologyImages;
    description: string;
};

export type Categories = {
    home: string;
    destination: string;
    crew: string;
    technology: string;
};

export type Home = {
    h5: string;
    h1: string;
    description: string;
}
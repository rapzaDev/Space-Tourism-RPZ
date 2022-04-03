export type Image = {
    png: string;
    webp: string;
};

export type TechnologyImages = {
    portrait: string; 
    landscape: string;
};

export type Destinations = {
    name: string;
    images: Image;
    description: string;
    distance: string;
    travel: string;
};

export type Crew = {
    name: string;
    images: Image;
    role: string;
    bio: string;
};

export type Technology = {
    name: string;
    images: TechnologyImages;
    description: string;
}
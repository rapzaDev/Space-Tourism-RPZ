export type Categories = {
    home: string;
    destination: string;
    crew: string;
    technology: string;
};

export type Crew = {
    id: number;
    name: string;
    images: Image;
    role: string;
    bio: string;
};

export type Image = {
    png: string;
    webp: string;
};

export type Destination = {
    id: number;
    name: string;
    images: Image;
    description: string;
    distance: string;
    travel: string;
};

export type Home = {
    h5: string;
    h1: string;
    description: string;
};
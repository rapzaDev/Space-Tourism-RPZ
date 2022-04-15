import React, { createContext, useEffect, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

export type PlanetType = {
    id: number;
    title: string;
}

export type CrewMember = {
    id: number;
}

export type TechType = {
    id: number;
}

type HomeContextType = {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    
    planet: PlanetType;
    setPlanet: React.Dispatch<React.SetStateAction<PlanetType>>;
    
    setExplore: React.Dispatch<React.SetStateAction<boolean>>;
    
    crewMember: CrewMember;
    setCrewMember: React.Dispatch<React.SetStateAction<CrewMember>>;

    techs: TechType;
    setTechs: React.Dispatch<React.SetStateAction<TechType>>;
}

export const HomeContext = createContext({} as HomeContextType);

function HomeContextProvider({children}: ContextProviderProps) {
    const [category, setCategory] = useState('home');    
    const [planet, setPlanet] = useState<PlanetType>({id: 1, title:'Moon'});
    const [explore, setExplore] = useState(false);
    const [crewMember, setCrewMember] = useState<CrewMember>({id: 1});
    const [techs, setTechs] = useState<TechType>({id: 1});

    
    const value: HomeContextType = {
        category, 
        setCategory, 
        planet, 
        setPlanet,
        setExplore,
        crewMember,
        setCrewMember,
        techs,
        setTechs,
    }

    useEffect(() => {
        if (explore) setCategory('destination');
    }, [explore])

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    );
};

export {HomeContextProvider};
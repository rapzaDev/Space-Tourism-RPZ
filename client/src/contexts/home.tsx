import React, { createContext, useEffect, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

export type PlanetType = {
    id: number;
    title: string;
}

type HomeContextType = {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    planet: PlanetType;
    setPlanet: React.Dispatch<React.SetStateAction<PlanetType>>;
    explore: boolean;
    setExplore: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomeContext = createContext({} as HomeContextType);

function HomeContextProvider({children}: ContextProviderProps) {
    const [category, setCategory] = useState('home');    
    const [planet, setPlanet] = useState<PlanetType>({id: 1, title:'Moon'});
    const [explore, setExplore] = useState(false);
    
    const value = {
        category, 
        setCategory, 
        planet, 
        setPlanet,
        explore,
        setExplore
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
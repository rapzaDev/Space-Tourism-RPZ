import React, { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

export type PlanetType = {
    id: number;
    title: string;
}

type NavButtonsContextType = {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    planet: PlanetType;
    setPlanet: React.Dispatch<React.SetStateAction<PlanetType>>;
}

export const NavButtonsContext = createContext({} as NavButtonsContextType);

function NavButtonsContextProvider({children}: ContextProviderProps) {
    const [category, setCategory] = useState('home');    
    const [planet, setPlanet] = useState<PlanetType>({id: 1, title:'Moon'});
    
    return (
        <NavButtonsContext.Provider value={{category, setCategory, planet, setPlanet}}>
            {children}
        </NavButtonsContext.Provider>
    );
};

export {NavButtonsContextProvider};
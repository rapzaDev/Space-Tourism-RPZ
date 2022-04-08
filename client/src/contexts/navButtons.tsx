import React, { createContext, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type NavButtonsContextType = {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    planet: string;
    setPlanet: React.Dispatch<React.SetStateAction<string>>;
}

export const NavButtonsContext = createContext({} as NavButtonsContextType);

function NavButtonsContextProvider({children}: ContextProviderProps) {
    const [category, setCategory] = useState('home');    
    const [planet, setPlanet] = useState('Moon');
    
    return (
        <NavButtonsContext.Provider value={{category, setCategory, planet, setPlanet}}>
            {children}
        </NavButtonsContext.Provider>
    );
};

export {NavButtonsContextProvider};
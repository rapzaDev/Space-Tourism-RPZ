import React, { createContext, useCallback, useState } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

type CategoryContextType = {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoriesContext = createContext({} as CategoryContextType);

function CategoriesContextProvider({children}: ContextProviderProps) {
    const [category, setCategory] = useState('home');    
    
    return (
        <CategoriesContext.Provider value={{category, setCategory}}>
            {children}
        </CategoriesContext.Provider>
    );
};

export {CategoriesContextProvider};
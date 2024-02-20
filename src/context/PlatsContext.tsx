import React, { createContext, useContext, useState } from 'react';
import {PlatsTypes} from  "../models/PlatsTypes"


interface PlatsContextType {
    plats: PlatsTypes[];
    setPlats: React.Dispatch<React.SetStateAction<PlatsTypes[]>>;
}

const defaultValue: PlatsContextType = {
    plats: [],
    setPlats: () => {}
};


export const PlatsContext = createContext<PlatsContextType>(defaultValue);
export const usePlatsContext = () => useContext(PlatsContext);


export const PlatsProvider = ({children} :  { children: React.ReactNode }) =>{
    const [plats, setPlats] = useState<PlatsTypes[]>([])
    const contextValue : PlatsContextType = {
        plats,
        setPlats,
    }
    return (
        <PlatsContext.Provider value={contextValue}>
            {children}
        </PlatsContext.Provider>
    )
}
import React, { createContext, useState } from "react";

export const AppStateContext = createContext({});

interface AppStateProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppStateProviderProps) {
    // value is an array with two elements: [state, setState]

    const value = useState({})

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
}

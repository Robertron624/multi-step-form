import React, { createContext, useState, useContext } from "react";

export const AppStateContext = createContext({});

interface AppStateProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppStateProviderProps) {
    const value = useState({});

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
}

export function useAppState() {
    const context = useContext(AppStateContext);
    if (context === undefined) {
        throw new Error("useAppState must be used within the AppStateProvider");
    }
    return context;
}
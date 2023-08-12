import React, { createContext, useState } from "react";
import { Addon } from "./constants";

interface AppState {
    name?: string;
    email?: string;
    phone?: string;

    // Second step
    plan?: "arcade" | "advanced" | "pro";
    period?: "yearly" | "monthly";
    addons?: Addon[];
}

export const AppStateContext = createContext({} as [AppState, React.Dispatch<React.SetStateAction<AppState>>]);

interface AppStateProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppStateProviderProps) {
    // value is an array with two elements: [state, setState]

    const value = useState<AppState>({
        name: "", 
        email: "", 
        phone: "",
        plan: undefined,
        period: undefined,
        addons: [],
    });

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
}

import { useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function useAppState() {
    const context = useContext(AppStateContext);
    if (context === undefined) {
        throw new Error("useAppState must be used within the AppStateProvider");
    }
    return context;
}
import { useContext } from "react";
import { AppStateContext } from "./state";

export function useAppState() {
    const context = useContext(AppStateContext);
    if (context === undefined) {
        throw new Error("useAppState must be used within the AppStateProvider");
    }
    return context;
}
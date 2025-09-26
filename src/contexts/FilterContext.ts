import { createContext } from "react";

type FilterContextType = {
    contrast: number;
    setContrast: (value: number) => void;
    saturation: number;
    setSaturation: (value: number) => void;
    brightness: number;
    setBrightness: (value: number) => void;
    fill: string;
    setFill: (value: string) => void;
    terminalText: string;
    setTerminalText: (value: string) => void;
    noFilters: boolean;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);
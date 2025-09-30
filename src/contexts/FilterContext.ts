import { createContext } from 'react';

type FilterContextType = {
    contrast: number;
    // eslint-disable-next-line no-unused-vars
    setContrast: (value: number) => void;
    saturation: number;
    // eslint-disable-next-line no-unused-vars
    setSaturation: (value: number) => void;
    brightness: number;
    // eslint-disable-next-line no-unused-vars
    setBrightness: (value: number) => void;
    fill: string;
    // eslint-disable-next-line no-unused-vars
    setFill: (value: string) => void;
    terminalText: string;
    // eslint-disable-next-line no-unused-vars
    setTerminalText: (value: string) => void;
    noFilters: boolean;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);
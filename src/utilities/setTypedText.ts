import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export const useTypedText = () => {
    const filterContext = useContext(FilterContext);

    if (!filterContext) {
        throw new Error("useTypedText must be used within a FilterContext.Provider");
    }

    const { terminalText, setTerminalText } = filterContext;

    const setTypedText = (newText: string, speed: number = 50) => {
        const baseText = terminalText; // keep what’s already there

        for (let i = 0; i <= newText.length; i++) {
            setTimeout(() => {
                setTerminalText(baseText + newText.slice(0, i));
            }, speed * i);
        }
    };

    return { setTypedText };
};

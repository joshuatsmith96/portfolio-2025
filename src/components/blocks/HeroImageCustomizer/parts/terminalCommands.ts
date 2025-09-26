import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterContext"

export const useTerminalCommand = () => {
    const filterContext = useContext(FilterContext);
    const commandList = {
        baseCommands: [
            "/help - command information",
            "/about - learn more about me",
            "/skills - learn about my skills",
            "/fill - info about the 'fill' command"
        ],
        fillCommands: [
            "/fill-color-[hex-or-RBG-color-here]",
            "/fill-pattern-1",
            "/fill-pattern-2",
            "/fill-pattern-3",
            "/fill-gif-1",
            "/fill-gif-2",
            "/fill-gif-3",
        ]
    }

    if (!filterContext) {
        throw new Error("useTerminalCommand must be used within a FilterContext.Provider");
    }

    const { terminalText, setTerminalText } = filterContext;

    const handleCommand = (command?: string) => {
        switch (command) {
            case "/help":
                setTerminalText(terminalText + `\n\n# List of available commands:\n${commandList.baseCommands.map((cmd) => `\n${cmd}`)}`);
                break;
            case "/about":
                return "# About command. More to come.";
            case "/skills":
                return "Skills command. More to come.";
            case "/fill":
                return "Fill command. More to come.";
            default:
                setTerminalText(terminalText + `\nUnkown command: ${command != "" ? command : '[no command entered]'}`)
                break;
        }
    };

    return handleCommand;
};

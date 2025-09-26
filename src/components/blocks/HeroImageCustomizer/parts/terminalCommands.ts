import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterContext"

export const useTerminalCommand = () => {
    const filterContext = useContext(FilterContext);
    const commandList = {
        baseCommands: [
            "/help - command information",
            "/about - learn more about me",
            "/skills - learn about my skills",
            "/fill - info about the 'fill' command",
            "/clear - clear the command screen"
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

    const skillsTable = `My skills include (but are not limited to):\n
________________________________
Skills         |  Beginner Expert
--------------------------------
React             |-----------|
Node.js           |----------|
JavaScript        |-----------|
TypeScript        |----------|
SQL               |-------|
HTML/CSS          |-----------|
REST APIs         |--------|
Git               |-----------|
Testing (Jest)    |---|
Next.js           |-----|
`

    const commandResponses = {
        about: "\n\n# I'm Joshua, and I'm a developer who thrives on letting creativity run rampant! My passion is building unique projects and finding unconventional ways to stretch the limits of the technology I work with.",
        skills: skillsTable,
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
                setTerminalText(terminalText + commandResponses.about);
                break;
            case "/skills":
                setTerminalText(terminalText + commandResponses.skills);
                break;
            case "/fill":
                return "Fill command. More to come.";
            case "/clear":
                setTerminalText('')
                break;
            default:
                setTerminalText(terminalText + `\n\nUnkown command: ${command != "" ? command : '[no command entered]'}`)
                break;
        }
    };

    return handleCommand;
};

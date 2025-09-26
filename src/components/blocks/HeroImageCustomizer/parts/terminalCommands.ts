import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterContext"


import Pattern1 from '../../../../assets/pattern1.png'
import Pattern2 from '../../../../assets/pattern2.webp'
import Pattern3 from '../../../../assets/pattern3.png'
import Gif1 from '../../../../assets/water.gif'
import Gif2 from '../../../../assets/warp.gif'
import Gif3 from '../../../../assets/Fire.gif'
import Surprise from '../../../../assets/rick-rolled.gif'
import Default from '../../../../assets/me-left.png'

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
            "/fill-default",
            "/fill-color-[hex-or-RBG-color-here]",
            "/fill-pattern-1",
            "/fill-pattern-2",
            "/fill-pattern-3",
            "/fill-gif-1",
            "/fill-gif-2",
            "/fill-gif-3",
            "/fill-surprise",
        ]
    }

    const skillsTable = `My skills include (but are not limited to):\n
________________________________
Skills         |  Proficiency
               |
React          |  Advanced
Node.js        |  Advanced
JavaScript     |  Advanced
TypeScript     |  Advanced
SQL            |  Intermediate
HTML/CSS       |  Advanced
REST APIs      |  Advanced
Git            |  Intermediate
Testing (Jest) |  Novice
Next.js        |  Intermediate
`

    const commandResponses = {
        about: "\n\n# I'm Joshua, and I'm a developer who thrives on letting creativity run rampant! My passion is building unique projects and finding unconventional ways to stretch the limits of the technology I work with.",
        skills: skillsTable,
    }

    if (!filterContext) {
        throw new Error("useTerminalCommand must be used within a FilterContext.Provider");
    }

    const fill = (command: string) => {
        if (command.includes("/fill-color-")) {
            const color = command.replace("/fill-color-", "")
            setFill(color)
        } else if (command.includes("/fill-pattern-")) {
            const patternNumber = Number(command.replace("/fill-pattern-", ""));
            switch (patternNumber) {
                case 1:
                    setFill(Pattern1);
                    break;
                case 2:
                    setFill(Pattern2);
                    break;
                case 3:
                    setFill(Pattern3);
                    break;
                default:
                    setTerminalText(terminalText + "\n# Invalid fill pattern");
                    break;
            }
        } else if (command.includes("/fill-gif-")) {
            const patternNumber = Number(command.replace("/fill-gif-", ""));
            switch (patternNumber) {
                case 1:
                    setFill(Gif1);
                    break;
                case 2:
                    setFill(Gif2);
                    break;
                case 3:
                    setFill(Gif3);
                    break;
                default:
                    setTerminalText(terminalText + "\n# Invalid fill gif");
                    break;
            }
        } else if (command.includes("/fill-surprise")) {
            setFill(Surprise)
        } else if (command.includes("/fill-default")) {
            setFill(Default)
        } else {
            setTerminalText(terminalText + "\n# Invalid fill type");
        }
    }

    const { terminalText, setTerminalText, setFill } = filterContext;

    const handleCommand = (command?: string) => {
        if (command?.startsWith("/fill-")) {
            fill(command);
            return;
        }
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
                setTerminalText(terminalText + `\n\n# List of available fills:\n${commandList.fillCommands.map((cmd) => `\n${cmd}`)}`)
                break;
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

import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { containerStyles } from '../HeroImageStyles'
import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterContext"
import { Input } from "@mui/material"
import { useRef } from "react"
import { useTerminalCommand } from "./terminalCommands"
// import Pattern1 from '../../../../assets/pattern1.png'
// import Pattern2 from '../../../../assets/pattern2.webp'
// import Pattern3 from '../../../../assets/pattern3.png'
// import Pattern4 from '../../../../assets/pattern4.png'
// import Water from '../../../../assets/water.gif'
// import Warp from '../../../../assets/warp.gif'
// import Fire from '../../../../assets/Fire.gif'
// import Default from '../../../../assets/me-left.png'

export const DeveloperInterface = ({ screen }: { screen?: 'desktop' | 'mobile' }) => {
    const position = screen === 'desktop' ? { position: 'absolute', top: '10%', left: '2%' } : {}
    const inputRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    const useFilterContext = useContext(FilterContext);
    const { terminalText, setTerminalText } = useFilterContext!;
    const terminalCommand = useTerminalCommand();




    const onEnter = () => {
        const value = inputRef.current?.value;

        //Add command into the enteredText with a '/>' before it.
        setTerminalText(terminalText + `\nJ:/> ${value}`)

        const response = terminalCommand(value);
        console.log(response);

        if (inputRef.current) inputRef.current.value = '';

        setTimeout(() => {
            if (textRef.current) {
                textRef.current.scrollTop = textRef.current.scrollHeight
            }
        }, 0)
    };



    return (
        <Box color={'white'} sx={[containerStyles, position]} zIndex={1}>
            <Typography textAlign={'center'} variant="h5">Developer</Typography>
            <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
                <TextField
                    multiline
                    ref={textRef}
                    className="scroll-test"
                    value={terminalText}
                    InputProps={{
                        readOnly: true,
                        sx: {
                            color: '#fff',
                            backgroundColor: '#00000081',
                            fontFamily: 'monospace',
                            outline: 'none',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },

                            /* For WebKit browsers (Chrome, Safari, Edge) */
                            '&::-webkit-scrollbar': {
                                width: '4px',
                                height: '4px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                borderRadius: '2px',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'transparent',
                            },

                            /* For Firefox */
                            scrollbarWidth: 'thin',
                            scrollbarColor: 'rgba(255,255,255,0.7) transparent',
                        },
                    }}
                    sx={{
                        width: '100%',
                        height: 200,
                        overflowY: 'auto',
                        resize: 'none',
                    }}
                />
                <Stack direction="row" width={'100%'}>
                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                        <Typography fontWeight={'bold'}>J:/&gt; </Typography>
                        <Input autoFocus disableUnderline inputRef={inputRef} sx={{ color: 'white' }} onKeyDown={(e) => e.key === "Enter" ? onEnter() : ''} />
                    </Stack>
                    <Button onClick={() => onEnter()}>Enter</Button>
                </Stack>
            </Stack>
        </Box>
    )
}
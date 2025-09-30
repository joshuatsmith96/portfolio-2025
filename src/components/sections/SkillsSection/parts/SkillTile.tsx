import { Box, Stack, Typography, Slide } from "@mui/material"
import { LinearProgress } from "@mui/material"
import { Image } from "../../../blocks/Image"
import { useInView } from "react-intersection-observer";

export const SkillTile = ({ id, skill, skillImg, value, barColor }: { id?: number, skill: string, skillImg: string, value: number, barColor?: string }) => {


    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });


    return (
        <Box ref={ref}>
            <Slide in={inView} direction={id && id % 2 === 0 ? 'left' : 'right'} timeout={800}>
                <Stack sx={{ width: '200px', backgroundColor: '#4545457a', border: 'solid thin #6c6c6cff', borderRadius: 2, padding: 2, height: '160px', justifyContent: 'space-between' }} gap={2}>
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: '100%' }} gap={5}>
                        <Image src={skillImg} alt="React Icon" sx={{ width: "60px" }} />
                        <Typography sx={{ fontWeight: 'bold', color: '#ffffff' }}>{skill}</Typography>
                    </Stack>
                    <LinearProgress
                        variant="determinate"
                        value={value ? value : 0}
                        sx={{
                            height: 10,
                            borderRadius: 50,
                            '& .MuiLinearProgress-bar': {
                                background: barColor ? barColor : 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
                                borderRadius: 50,
                            },
                            backgroundColor: '#e0e0e0', // track color
                        }}
                    />
                </Stack>
            </Slide>
        </Box>
    )
}
import { Stack, Typography } from "@mui/material"
import { LinearProgress } from "@mui/material"
import { Image } from "../../../blocks/Image"

export const SkillTile = ({ skill, skillImg, value, barColor }: { skill: string, skillImg: string, value: number, barColor?: string }) => {

    return <Stack sx={{ width: '200px', backgroundColor: '#4545457a', border: '#ffffffffff', borderRadius: 2, padding: 2, height: '160px', justifyContent: 'space-between' }} gap={2}>
        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} gap={5}>
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
}
import { Box, Typography } from "@mui/material"
import { containerStyles } from '../HeroImageStyles'

export const DesignerInterface = ({ screen }: { screen?: 'desktop' | 'mobile' }) => {
    const position = screen === 'desktop' ? { position: 'absolute', top: '10%', left: '2%' } : {}

    return (
        <Box color={'white'} sx={[containerStyles, position]}>
            <Typography textAlign={'center'} variant="h5">Designer</Typography>
            <Typography textAlign={'center'}>Select a design fill</Typography>
        </Box>
    )
}
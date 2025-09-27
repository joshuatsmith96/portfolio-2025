import { Box, Button, Typography } from "@mui/material"
import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterContext"
import { CustomSlider } from "../../CustomSlider/CustomSlider"
import { containerStyles } from "../HeroImageStyles"
import { FadeIn } from "../../FadeIn"

export const DesignerInterface = ({ screen }: { screen?: 'desktop' | 'mobile' }) => {



    const useFilterContext = useContext(FilterContext);

    const { contrast, setContrast,
        saturation, setSaturation,
        brightness, setBrightness,
        noFilters
    } = useFilterContext!;

    const resetFilters = () => {
        setContrast(50);
        setSaturation(20);
        setBrightness(50);
    }

    const position = screen === 'desktop' ? { position: 'absolute', top: '10%', right: '2%' } : {}



    return (
        <FadeIn direction="left" duration={1000} delay={500}>
            <Box color={'white'} sx={[containerStyles, position]}>
                <Typography textAlign={'center'} variant="h5">Designer</Typography>
                <Typography textAlign={'center'}>Try adjusting the filters!</Typography>
                <Box sx={{ width: '90%' }}>
                    {noFilters ? '' : <Button onClick={resetFilters}>Reset</Button>}
                    <CustomSlider label="Contrast" value={contrast} color="primary" onChange={(_, newValue) => setContrast(newValue as number)} />
                    <CustomSlider label="Saturation" value={saturation} color="secondary" onChange={(_, newValue) => setSaturation(newValue as number)} />
                    <CustomSlider label="Brightness" value={brightness} color="success" onChange={(_, newValue) => setBrightness(newValue as number)} />
                </Box>
            </Box>
        </FadeIn>
    )
}
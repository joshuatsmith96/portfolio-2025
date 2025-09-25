import { Box, Button, Typography } from "@mui/material"
import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterContext"
import { CustomSlider } from "../../CustomSlider/CustomSlider"

export const DeveloperInterface = () => {

    const useFilterContext = useContext(FilterContext);

    const { contrast, setContrast,
        saturation, setSaturation,
        brightness, setBrightness,
        noFilters
    } = useFilterContext!;

    console.log(contrast)

    const resetFilters = () => {
        setContrast(50);
        setSaturation(20);
        setBrightness(50);
    }

    return (
        <Box color={'white'} sx={{ order: 1, backgroundColor: 'rgba(0, 0, 0, 0.41)', border: 'solid #3c3c3cff thin', padding: 2, width: '300px', height: "300px", borderRadius: 1 }}>
            <Typography textAlign={'center'} variant="h5">&#60;&#62; Developer &#60;/&#62;</Typography>
            <Box sx={{ width: '100%' }}>
                {noFilters ? '' : <Button onClick={resetFilters}>Reset</Button>}
                <CustomSlider label="Contrast" value={contrast} color="primary" onChange={(_, newValue) => setContrast(newValue as number)} />
                <CustomSlider label="Saturation" value={saturation} color="secondary" onChange={(_, newValue) => setSaturation(newValue as number)} />
                <CustomSlider label="Brightness" value={brightness} color="success" onChange={(_, newValue) => setBrightness(newValue as number)} />
            </Box>
        </Box>
    )
}
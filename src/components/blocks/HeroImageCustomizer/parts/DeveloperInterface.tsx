import { Box, Button } from "@mui/material"
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
        setContrast(100);
        setSaturation(20);
        setBrightness(100);
    }

    return (
        <Box color={'white'} sx={{ order: 1 }}>
            <Box sx={{ width: 300 }}>
                {noFilters ? '' : <Button onClick={resetFilters}>Reset</Button>}
                <CustomSlider label="Contrast" value={contrast} color="primary" onChange={(_, newValue) => setContrast(newValue as number)} />
                <CustomSlider label="Saturation" value={saturation} color="secondary" onChange={(_, newValue) => setSaturation(newValue as number)} />
                <CustomSlider label="Brightness" value={brightness} color="success" onChange={(_, newValue) => setBrightness(newValue as number)} />
            </Box>
        </Box>
    )
}
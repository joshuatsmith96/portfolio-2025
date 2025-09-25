import { Box, Stack } from "@mui/material"
import { CustomTab } from "../Tabs"
import { DesignerInterface } from "./parts/DesignerInterface"
import { DeveloperInterface } from "./parts/DeveloperInterface"
import { HeadComponent } from "./parts/HeadComponent"
import { useState } from "react"
import { FilterContext } from "../../../contexts/FilterContext"

export const HeroImageCustomizer = () => {
    const [contrast, setContrast] = useState(50)
    const [saturation, setSaturation] = useState(20)
    const [brightness, setBrightness] = useState(50)

    const noFilters: boolean = contrast === 0 && saturation === 0 && brightness === 0;

    const providerValues = {
        contrast, setContrast,
        saturation, setSaturation,
        brightness, setBrightness,
        noFilters
    }

    const tabs = [
        { label: "Developer", content: <DeveloperInterface /> },
        { label: "Designer", content: <DesignerInterface /> },
    ];


    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="space-between" mt={2} sx={{ display: { xs: 'none', md: 'flex' }, mt: 10 }}>
                <FilterContext.Provider value={providerValues}>
                    <Box sx={{ width: '100%', position: 'relative' }}>
                        <DesignerInterface screen="desktop" />
                        <HeadComponent />
                        <DeveloperInterface screen="desktop" />
                    </Box>
                </FilterContext.Provider>
            </Stack>
            <Stack direction="column" spacing={2} justifyContent="space-between" mt={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <FilterContext.Provider value={providerValues}>
                    <CustomTab tabs={tabs} orientation="horizontal" />
                    <HeadComponent />
                </FilterContext.Provider>
            </Stack >
        </>
    )
}
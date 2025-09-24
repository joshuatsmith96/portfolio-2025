import { Stack } from "@mui/material"
import { CustomTab } from "../Tabs"
import { DesignerInterface } from "./parts/DesignerInterface"
import { DeveloperInterface } from "./parts/DeveloperInterface"
import { HeadComponent } from "./parts/HeadComponent"

export const HeroImageCustomizer = () => {

    const tabs = [
        { label: "Designer", content: <DesignerInterface /> },
        { label: "Developer", content: <DeveloperInterface /> },
    ];


    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="space-between" mt={2} sx={{ display: { xs: 'none', md: 'flex' }, mt: 10 }}>
                <DesignerInterface />
                <HeadComponent />
                <DeveloperInterface />
            </Stack>
            <Stack direction="column" spacing={2} justifyContent="space-between" mt={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <CustomTab tabs={tabs} orientation="horizontal" />
                <HeadComponent />
            </Stack>
        </>
    )
}
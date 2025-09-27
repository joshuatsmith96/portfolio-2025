import { Stack } from "@mui/material"
import { NavBar } from "../components/blocks/NavBar"
import { HeroSection } from "../components/sections/HeroSection"
import { ProjectSection } from "../components/sections/ProjectSection"

export const Home = () => {
    return (
        <Stack>
            <NavBar />
            <HeroSection />
            <ProjectSection />
        </Stack>
    )
}
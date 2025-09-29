import { Stack } from "@mui/material"
import { NavBar } from "../components/blocks/NavBar"
import { HeroSection } from "../components/sections/HeroSection"
import { ProjectSection } from "../components/sections/ProjectSection"
import { AboutSection } from "../components/sections/AboutSection"

export const Home = () => {
    return (
        <Stack>
            <NavBar />
            <HeroSection />
            <ProjectSection />
            <AboutSection />
        </Stack>
    )
}
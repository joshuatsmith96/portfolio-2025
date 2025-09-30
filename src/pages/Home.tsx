import { Stack } from "@mui/material"
import { HeroSection } from "../components/sections/HeroSection"
import { ProjectSection } from "../components/sections/ProjectSection"
import { AboutSection } from "../components/sections/AboutSection"
import { SkillSection } from "../components/sections/SkillsSection"
import { ContactSection } from "../components/sections/ContactSection"

export const Home = () => {
    return (
        <Stack>
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <SkillSection />
            <ContactSection />
        </Stack>
    )
}
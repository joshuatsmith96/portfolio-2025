import { Stack } from "@mui/material"
import { NavBar } from "../components/blocks/NavBar"
import { HeroSection } from "../components/sections/HeroSection"

export const Home = () => {
    return (
        <Stack>
            <NavBar />
            <HeroSection></HeroSection>
        </Stack>
    )
}
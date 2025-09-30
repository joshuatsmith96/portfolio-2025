import { About } from "./parts/About"
import { Experience } from "./parts/Experience"
import { Section } from "../../blocks/Section"
import { Stack } from "@mui/material"
import { SectionHeader } from "../../blocks/SectionHeader/SectionHeader"
import { HeaderStyles } from "./AboutStyles"


export const AboutSection = () => {

    return (
        <Section sx={{ bgcolor: '#2F2F2F' }} id="about">
            <SectionHeader sx={HeaderStyles}>About Me</SectionHeader>
            <Stack sx={{ flexDirection: { xs: 'column', lg: 'row' }, py: 10, justifyContent: 'space-between' }}>
                <About />
                <Experience />
            </Stack>
        </Section>
    )
}
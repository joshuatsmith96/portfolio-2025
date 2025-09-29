import { About } from "./parts/About"
import { Experience } from "./parts/Experience"
import { Section } from "../../blocks/Section"
import { Stack, Typography } from "@mui/material"

export const AboutSection = () => {

    return (
        <Section sx={{ bgcolor: '#2F2F2F' }}>
            <Typography variant="h3" sx={{
                background: 'linear-gradient(90deg, rgba(146, 69, 255, 1) 0%, rgba(233, 89, 255, 1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                display: 'inline-block',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '100%'
            }}>About Me</Typography>
            <Stack sx={{ flexDirection: { xs: 'column', lg: 'row' }, py: 10, justifyContent: 'space-between' }}>
                <About />
                <Experience />
            </Stack>
        </Section>
    )
}
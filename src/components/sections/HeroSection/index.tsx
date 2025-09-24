import { Section } from "../../blocks/Section"
import { Box, Stack, Typography } from "@mui/material"
import { HeroTypographyStyles } from "./HeroSectionStyles"

export const HeroSection = () => (
    <Section>
        <Typography variant="h4" sx={HeroTypographyStyles.typography1}>
            <Typography variant="h4" component="strong" sx={HeroTypographyStyles.typography2}>
                Hello!
            </Typography> I'm Joshua. I'm a...
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" mt={2}>
            <Box>Designer</Box>
            <Box>Head</Box>
            <Box>Developer</Box>
        </Stack>
    </Section>
)

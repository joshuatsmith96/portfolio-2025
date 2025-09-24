import { Section } from "../../blocks/Section"
import { Box, Stack, Typography } from "@mui/material"
import { HeroTypographyStyles } from "./HeroSectionStyles"
import Grid from '../../../assets/Grid.png';


export const HeroSection = () => {

    return (
        <Section bgImgSrc={Grid} bgImgAlt="Testing Image" sx={{ paddingTop: '100px' }}>
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
}

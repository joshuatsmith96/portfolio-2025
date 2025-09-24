import { Section } from "../../blocks/Section"
import { Box, Stack, Typography } from "@mui/material"
import { HeroTypographyStyles } from "./HeroSectionStyles"
import Grid from '../../../assets/Grid.png';


export const HeroSection = () => {

    return (
        <Section bgImgSrc={Grid} bgImgAlt="Testing Image" sx={{ paddingTop: '100px' }}>
            <Typography variant={"h4"} sx={HeroTypographyStyles.typography1}>
                <Typography variant="h4" component="strong" sx={HeroTypographyStyles.typography2}>
                    Hello!
                </Typography> I'm Joshua. I'm a...
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="space-between" mt={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box color={'white'} sx={{ order: 1 }}>[desktop]Designer</Box>
                <Box color={'white'} sx={{ order: 2 }}>[desktop]Head</Box>
                <Box color={'white'} sx={{ order: 3 }}>[desktop]Developer</Box>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="space-between" mt={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box color={'white'} sx={{ order: 1 }}>[mobile]Designer</Box>
                <Box color={'white'} sx={{ order: 2 }}>[mobile]Head</Box>
                <Box color={'white'} sx={{ order: 3 }}>[mobile]Developer</Box>
            </Stack>
        </Section >
    )
}

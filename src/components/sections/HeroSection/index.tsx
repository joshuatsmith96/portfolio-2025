import { Section } from '../../blocks/Section';
import { Typography } from '@mui/material';
import { HeroTypographyStyles } from './HeroSectionStyles';
import Grid from '../../../assets/Grid.png';
import { HeroImageCustomizer } from '../../blocks/HeroImageCustomizer';
import { SlideIn } from '../../blocks/SlideIn';


export const HeroSection = () => {

    return (
        <Section bgImgSrc={Grid} bgImgAlt="Testing Image" sx={{ paddingTop: '100px' }}>
            <SlideIn>
                <Typography variant={'h4'} sx={HeroTypographyStyles.typography1}>
                    <Typography variant="h4" component="strong" sx={HeroTypographyStyles.typography2}>
                        Hello!
                    </Typography> I'm Joshua. I'm a...
                </Typography>
            </SlideIn>
            <HeroImageCustomizer />
        </Section >
    );
};

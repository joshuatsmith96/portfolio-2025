import { Box, Stack, type SxProps } from "@mui/material";
import { SectionStyles } from "./styles/SectionStyles";
import { Image } from "../Image";

export const Section = ({ children, bgImgSrc, bgImgAlt, sx }: { children: React.ReactNode, bgImgSrc?: string, bgImgAlt?: string, sx?: SxProps }) => {
    return (
        <Stack
            width="100%"
            alignItems="center"
            pt={4}
            sx={sx}
            position={'relative'}
        >
            {bgImgSrc ? <Image src={bgImgSrc ? bgImgSrc : ''} alt={bgImgAlt ? bgImgAlt : ''} sx={{ position: 'absolute', top: 0, left: 0, zIndex: 0, height: '100%', objectFit: 'cover' }} /> : ''}
            <Box sx={SectionStyles}>
                {children}
            </Box>
        </Stack>
    );
};

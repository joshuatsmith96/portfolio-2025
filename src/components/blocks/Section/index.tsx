import { Box, Stack, type SxProps } from "@mui/material";
import { SectionStyles } from "./styles/SectionStyles";
import { Image } from "../Image";

export const Section = ({ children, bgImgSrc, bgImgAlt, sx }: { children: React.ReactNode, bgImgSrc?: string, bgImgAlt?: string, sx?: SxProps }) => {
    console.log("HELLO FROM SECTION")
    return (
        <Stack
            width="100%"
            alignItems="center"
            py={4}
            sx={sx}
        >
            <Image src={bgImgSrc ? bgImgSrc : ''} alt={bgImgAlt ? bgImgAlt : ''} sx={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
            <Box sx={SectionStyles}>
                {children}
            </Box>
        </Stack>
    );
};

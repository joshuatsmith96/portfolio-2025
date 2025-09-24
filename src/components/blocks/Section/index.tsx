import { Box, Stack } from "@mui/material";
import { SectionStyles } from "./styles/SectionStyles";
import { Image } from "../Image";
import Grid from '../../../assets/Grid.png';

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack
            width="100%"
            alignItems="center"
            py={4}
        >
            <Image src={Grid} alt="Test" sx={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
            <Box sx={SectionStyles}>
                {children}
            </Box>
        </Stack>
    );
};

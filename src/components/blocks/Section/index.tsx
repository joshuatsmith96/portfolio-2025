import { Box, Stack } from "@mui/material";
import { SectionStyles } from "./styles/SectionStyles";
import { Image } from "../Image";

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack
            width="100%"
            alignItems="center"
            py={4}
        >
            <Image />
            <Box sx={SectionStyles}>
                {children}
            </Box>
        </Stack>
    );
};

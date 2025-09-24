import { Box, Stack } from "@mui/material";
import { SectionStyles } from "./styles/SectionStyles";

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack
            width="100%"
            alignItems="center"
            py={4}
        >
            <Box sx={SectionStyles}>
                {children}
            </Box>
        </Stack>
    );
};

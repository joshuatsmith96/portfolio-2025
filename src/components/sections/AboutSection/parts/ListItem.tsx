import { Box, Slide, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

export const CustomListItem = ({ children }: { children: ReactNode }) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });

    return (
        <Box ref={ref}>
            <Slide in={inView} direction="down" timeout={1000}>
                <Stack direction={'row'} gap={1.5}>
                    <Box sx={{ bgcolor: 'red', width: '10px', backgroundColor: '#C89AFF' }} />
                    <Typography color="#bdbdbdff">{children}</Typography>
                </Stack>
            </Slide>
        </Box>
    );
};
import { Box, Stack, Typography } from "@mui/material"
import type { ReactNode } from "react"

export const CustomListItem = ({ children }: { children: ReactNode }) => {

    return (
        <Stack direction={'row'} gap={1.5}>
            <Box sx={{ bgcolor: 'red', width: '10px', backgroundColor: '#C89AFF' }} />
            <Typography color="#bdbdbdff">{children}</Typography>
        </Stack>
    )
}
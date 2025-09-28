import { Box, Typography } from "@mui/material"
import type { ReactNode } from "react"

export const SkillAttribute = ({ children, bgColor }: { children: ReactNode, bgColor: string }) => {
    return (
        <Box sx={{ borderRadius: 10, px: '20px', py: '8px', color: 'white', background: bgColor }}>
            <Typography fontWeight={'bold'} fontSize={'14px'}>{children}</Typography>
        </Box>
    )
}
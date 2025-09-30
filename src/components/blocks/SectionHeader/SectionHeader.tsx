import { Typography } from "@mui/material"
import type { SxProps } from "@mui/material/styles"
import type { ReactNode } from "react"

export const SectionHeader = ({ children, sx }: { children: ReactNode, sx?: SxProps }) => {

    return <Typography fontWeight={'bold'} letterSpacing={'0.1em'} fontSize={{ xs: '28px', sm: '32px', md: '42px' }} sx={sx}>{children}</Typography>
}
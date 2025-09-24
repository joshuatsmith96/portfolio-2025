import { Box, type SxProps } from "@mui/material"

export const Image = ({ src, alt, sx }: { src: string, alt: string, sx: SxProps }) => {
    return (
        <Box
            component="img"
            src={src}
            alt={alt}
            width={'100%'}
            height={'auto'}
            sx={sx}
        />
    )
}
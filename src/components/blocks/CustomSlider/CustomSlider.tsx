import { Box } from "@mui/material"
import { Slider, Typography } from "@mui/material"
import type { SliderColorTypes } from "../../../types/SliderColorTypes"

export const CustomSlider = ({
    label,
    value,
    color,
    onChange
}: {
    label: string,
    value: number,
    color: SliderColorTypes,
    onChange: (event: Event, value: number | number[]) => void;
}) => {

    return (
        <Box>
            <Typography>{label} - {value}%</Typography>
            <Slider
                value={value}
                aria-label="Small"
                valueLabelDisplay="auto"
                color={color}
                onChange={onChange}
            />
        </Box>
    )
}
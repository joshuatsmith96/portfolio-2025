import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material"
import { containerStyles } from '../HeroImageStyles'
import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterContext"
import Pattern1 from '../../../../assets/pattern1.png'
import Pattern2 from '../../../../assets/pattern2.webp'
import Pattern3 from '../../../../assets/pattern3.png'
import Pattern4 from '../../../../assets/pattern4.png'
import Water from '../../../../assets/water.gif'
import Warp from '../../../../assets/warp.gif'
import Fire from '../../../../assets/Fire.gif'
import Default from '../../../../assets/me-left.png'

export const DesignerInterface = ({ screen }: { screen?: 'desktop' | 'mobile' }) => {
    const position = screen === 'desktop' ? { position: 'absolute', top: '10%', left: '2%' } : {}

    const useFilterContext = useContext(FilterContext);
    const { fill, setFill } = useFilterContext!;

    return (
        <Box color={'white'} sx={[containerStyles, position]} zIndex={1}>
            <Typography textAlign={'center'} variant="h5">Designer</Typography>
            <Typography textAlign={'center'}>Select a design fill</Typography>
            <Box width={'100%'}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={fill}
                        onChange={(e) => setFill(e.target.value)}
                        sx={{ backgroundColor: '#e5e5e5ff' }} >
                        <MenuItem value={Default}>Default</MenuItem>
                        <MenuItem value={Water}>Water</MenuItem>
                        <MenuItem value={Fire}>Fire</MenuItem>
                        <MenuItem value={Warp}>Warp</MenuItem>
                        <MenuItem value={Pattern1}>Pattern 1</MenuItem>
                        <MenuItem value={Pattern2}>Pattern 2</MenuItem>
                        <MenuItem value={Pattern3}>Pattern 3</MenuItem>
                        <MenuItem value={Pattern4}>Pattern 4</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}
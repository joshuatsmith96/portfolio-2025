import { Box } from "@mui/material"
import { Image } from "../../Image"
import HeadLeft from '../../../../assets/me-left.png'
import HeadRight from '../../../../assets/me-right.png'

export const HeadComponent = () => {
    return (
        <Box color={'white'} sx={{ order: 1, textAlign: 'center' }}>
            <Image src={HeadLeft} alt="Self Portrait - Left Side" sx={{ width: { xs: '113px', sm: '140px', md: '200px' } }} />
            <Image src={HeadRight} alt="Self Portrait - Right Side" sx={{ width: { xs: '132px', sm: '163px', md: '233px' } }} />
        </Box>
    )
}
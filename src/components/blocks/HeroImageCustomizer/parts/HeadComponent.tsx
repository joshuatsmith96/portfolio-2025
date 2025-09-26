import { Box } from "@mui/material"
import { Image } from "../../Image"
import HeadLeft from '../../../../assets/me-left.png'
import HeadRight from '../../../../assets/me-right.png'
import { FilterContext } from "../../../../contexts/FilterContext"
import { useContext } from "react"

export const HeadComponent = () => {

    const useFilterContext = useContext(FilterContext);
    const { brightness, contrast, saturation, fill } = useFilterContext!;

    const isColor = (fill: string) => /^#|^rgb|^hsl/.test(fill);

    const fillStyle = (fill: string) => {
        if (isColor(fill)) {
            return { backgroundColor: fill };
        } else {
            return {
                backgroundImage: `url(${fill})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            };
        }
    };


    return (
        <Box color={'white'} sx={{ order: 1, textAlign: 'center' }}>
            <Box
                sx={{
                    display: 'inline-block',
                    width: { xs: '113px', sm: '140px', md: '200px' },
                    height: { xs: '260px', sm: '320px', md: '457px' }, // 👈 set a height
                    ...fillStyle(fill),
                    WebkitMaskImage: `url(${HeadLeft})`,
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskImage: `url(${HeadLeft})`,
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    maskSize: 'contain',
                }}
            />
            <Image src={HeadRight} alt="Self Portrait - Right Side" sx={{ width: { xs: '132px', sm: '163px', md: '233px' }, filter: `saturate(${saturation * 5}%) contrast(${contrast * 2}%) brightness(${brightness * 2}%)` }} />
        </Box>
    )
}

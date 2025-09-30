import { SocialLink } from './Parts/SocialMediaLink';
import { Image } from '../../blocks/Image';
import { Stack, Typography } from '@mui/material';
import TestImage from '../../../assets/pattern1.png';
import LinkedIn from '../../../assets/linkedinv3.png';
import GitHub from '../../../assets/GitHub.png';

export const Footer = () => {

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} alignItems={'center'} px={5} py={3} gap={{ xs: 4 }}>
            <Stack direction={'row'} alignItems={'center'} width={'250px'} justifyContent={'center'} gap={2}>
                <Image src={TestImage} alt="Image of Joshua" sx={{ width: '65px', height: '65px', borderRadius: '100px' }} />
                <Stack color={'white'}>
                    <Typography fontSize={'20px'} sx={{
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Your desired gradient
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        // Optional: Add font styling like fontWeight or fontSize
                        fontWeight: 'bold',
                    }}>Joshua Smith</Typography>
                    <Typography fontSize={'14px'}>React Developer</Typography>
                </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={5}>
                <SocialLink src={LinkedIn} alt="LinkedIn" link="https://www.linkedin.com/in/joshua-s-90680119b/" />
                <SocialLink src={GitHub} alt="GitHub" link="https://github.com/joshuatsmith96" />
            </Stack>
            <Stack justifyContent={'center'} alignItems={'start'}>
                <Typography color="#7d7d7dff">© 2025 Joshua Smith</Typography>
                <Typography color="#5d5d5dff" fontSize={'12px'}>Made with React and Typescript</Typography>
            </Stack>
        </Stack>
    );
};
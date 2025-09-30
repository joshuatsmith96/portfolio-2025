import { Stack, Typography } from '@mui/material';
import { Image } from '../../../blocks/Image';
import TestImage from '../../../../assets/pattern1.png';
import PlaceIcon from '@mui/icons-material/Place';

export const About = () => {

    return (
        <Stack gap={5} sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRight: {
                lg: 'solid thin #6d6d6dff'
            }
        }}>
            <Stack>
                <Image src={TestImage} alt="Image of Joshua Smith" sx={{ borderRadius: '150px 150px 10px 10px', width: '300px', height: '300px' }} />
                <Stack sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mt: 2 }} gap={1}>
                    <PlaceIcon sx={{ fontSize: '30px', color: '#ffffff' }} />
                    <Typography color="#ffffff" sx={{ fontWeight: 'bold' }} >USA | Minneapolis, MN</Typography>
                </Stack>
            </Stack>
            <Typography sx={{ color: '#ffffff', fontSize: '18px', fontWeight: 'thin', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Stack>
    );
};
import { Stack, Typography } from '@mui/material';
import { Image } from '../../../blocks/Image';
import TestImage from '../../../../assets/pattern1.png';
import PlaceIcon from '@mui/icons-material/Place';

export const About = () => {
  return (
    <Stack
      gap={5}
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRight: {
          lg: 'solid thin #6d6d6dff',
        },
      }}
    >
      <Stack>
        <Image
          src={TestImage}
          alt="Image of Joshua Smith"
          sx={{
            borderRadius: '150px 150px 10px 10px',
            width: '300px',
            height: '300px',
          }}
        />
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
          gap={1}
        >
          <PlaceIcon sx={{ fontSize: '30px', color: '#ffffff' }} />
          <Typography color="#ffffff" sx={{ fontWeight: 'bold' }}>
            USA | Minneapolis, MN
          </Typography>
        </Stack>
      </Stack>
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: '18px',
          fontWeight: 'thin',
          textAlign: 'center',
        }}
      >
        Hi, I'm Joshua Smith, a React developer with a passion for building
        clean, responsive, and user-focused web applications. Outside of coding,
        I'm a proud husband and father, and I enjoy flying my drone to capture
        new perspectives. Working on React projects has become a hobby of mine.
        It's become something I genuinely enjoy exploring in my free time as I
        continue learning new technologies and sharpening my skills in this
        ever-evolving field.
      </Typography>
    </Stack>
  );
};

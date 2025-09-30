import { Stack } from '@mui/material';
import { NavContainerStyles, NavBarStyles } from './NavStyles';
import { NavLink } from './parts/NavLink';
import { SlideIn } from '../SlideIn';

export const NavBar = () => {
    return (
        <SlideIn>
            <Stack sx={NavContainerStyles}>
                <Stack sx={NavBarStyles} direction={'row'} spacing={4}>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                </Stack>
            </Stack>
        </SlideIn>
    );
};
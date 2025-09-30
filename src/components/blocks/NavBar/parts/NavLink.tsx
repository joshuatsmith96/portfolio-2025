import { Link, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { NavLinkStyles } from '../NavStyles';

export const NavLink = ({ children, href, selected }: { children: ReactNode, href: string, selected?: boolean }) => {
    return (
        <Link sx={NavLinkStyles} href={href}>
            <Typography fontWeight={selected ? 600 : 100}>{children}</Typography>
        </Link>
    );
};
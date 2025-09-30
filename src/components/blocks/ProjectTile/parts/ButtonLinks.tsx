import { Link, Stack } from '@mui/material';
import type { ReactNode } from 'react';
import { ButtonLinkContainerStyles, ButtonLinkStyles } from '../ProjectTileStyles';

export const ButtonLink = ({ children, href }: { children: ReactNode, href: string }) => {

    return (
        <Link href={href} sx={ButtonLinkContainerStyles}>
            <Stack direction={'row'} gap={3} sx={ButtonLinkStyles}>
                {children}
            </Stack>
        </Link>
    );
};
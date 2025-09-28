import { Link, Stack } from "@mui/material";
import type { ReactNode } from "react";
import { ButtonLinkContainerStyles } from "../ProjectTileStyles";

export const ButtonLink = ({ children, href }: { children: ReactNode, href: string }) => {

    return (
        <Link href={href} sx={ButtonLinkContainerStyles}>
            <Stack direction={'row'} gap={3} sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                {children}
            </Stack>
        </Link>
    )
}
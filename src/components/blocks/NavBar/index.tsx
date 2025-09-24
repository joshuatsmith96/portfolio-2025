import { Stack } from "@mui/material"
import { NavContainerStyles, NavBarStyles } from "./NavStyles"
import { NavLink } from "./parts/NavLink"

export const NavBar = () => {
    return (
        <Stack sx={NavContainerStyles}>
            <Stack sx={NavBarStyles} direction={'row'} spacing={4}>
                <NavLink href="Intro" selected>Intro</NavLink>
                <NavLink href="Projects">Projects</NavLink>
                <NavLink href="About">About</NavLink>
                <NavLink href="Contact">Contact</NavLink>
            </Stack>
        </Stack>
    )
}
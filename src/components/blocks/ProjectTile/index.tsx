import { Stack, Typography } from "@mui/material"
import { Image } from "../Image"
import { SkillAttribute } from "./parts/SkillAttribute"
import type { ProjectTileType } from "../../../types/ProjectTypes"
import { ButtonLink } from "./parts/ButtonLinks"
import GitHubIcon from '@mui/icons-material/GitHub';
import Enter from '@mui/icons-material/Login';
import FigmaIcon from '../../../assets/figma-logo.svg'


export const ProjectTile = ({ imgSrc, imgAlt, title, skills, description, githubLink, demoLink, figmaLink, reverse }: ProjectTileType) => {

    return (
        <Stack sx={{
            flexDirection: {
                xl: reverse ? 'row-reverse' : 'row',
                lg: reverse ? 'row-reverse' : 'row',
                md: reverse ? 'row-reverse' : 'row',
                sm: 'column'
            },
            width: {
                sm: '80%',
                md: '100%'
            }
        }} justifyContent={'space-between'} mt={10} gap={5}>
            <Image src={imgSrc} alt={imgAlt} sx={{ width: { lg: '550px', md: "350px" }, height: { lg: '350px', md: '100%' } }} />
            <Stack sx={{ width: { md: '500px', sm: '100%' } }} justifyContent={'space-between'} gap={4}>
                <Stack gap={1} sx={{ width: { sm: '100%' } }}>
                    <Typography variant="h3" color="#ffffff">{title}</Typography>
                    <Stack direction={'row'} spacing={1}>
                        {skills ? skills.map((skill) => {
                            return <SkillAttribute bgColor={skill.bgColor}>{skill.name}</SkillAttribute>
                        }) : ''}
                    </Stack>
                </Stack>
                <Typography color="#ffffff" fontSize={'18px'}>{description}</Typography>
                <Stack direction={'row'} gap={2}>
                    {/* Buttons going to GitHub, Demo, and Figma */}
                    {githubLink ? <ButtonLink href={githubLink}>
                        <GitHubIcon />
                        <Typography sx={{ fontSize: { xs: '14px' }, display: { xs: 'none', md: 'block' } }}>GitHub</Typography>
                    </ButtonLink> : ''}
                    {demoLink ? <ButtonLink href={demoLink}>
                        <Enter />
                        <Typography sx={{ fontSize: { xs: '14px' }, display: { xs: 'none', md: 'block' } }}>Demo</Typography>
                    </ButtonLink> : ''}
                    {figmaLink ? <ButtonLink href={figmaLink}>
                        <Image src={FigmaIcon} alt="Figma icon" sx={{ width: '15px' }} />
                        <Typography sx={{ fontSize: { xs: '14px' }, display: { xs: 'none', md: 'block' } }}>Figma</Typography>
                    </ButtonLink> : ''}
                </Stack>
            </Stack>
        </Stack >
    )
}
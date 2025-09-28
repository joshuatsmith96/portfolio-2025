import { Stack, Typography } from "@mui/material"
import { Image } from "../Image"
import { SkillAttribute } from "./parts/SkillAttribute"
import type { ProjectTileType } from "../../../types/ProjectTypes"
import { ButtonLink } from "./parts/ButtonLinks"
import GitHubIcon from '@mui/icons-material/GitHub';
import Enter from '@mui/icons-material/Login';
import FigmaIcon from '../../../assets/figma-logo.svg'
import { SlideIn } from "../SlideIn"


export const ProjectTile = ({ imgSrc, imgAlt, title, skills, description, githubLink, demoLink, figmaLink, reverse }: ProjectTileType) => {

    return (
        <SlideIn direction="up">
            <Stack direction={reverse ? 'row-reverse' : 'row'} justifyContent={'space-between'} mt={10}>
                <Image src={imgSrc} alt={imgAlt} sx={{ width: '550px', height: '330px' }} />
                <Stack width={'500px'} justifyContent={'space-between'}>
                    <Stack gap={1}>
                        <Typography variant="h3" color="#ffffff">{title}</Typography>
                        <Stack direction={'row'} spacing={1}>
                            {skills ? skills.map((skill) => {
                                return <SkillAttribute bgColor={skill.bgColor}>{skill.name}</SkillAttribute>
                            }) : ''}
                        </Stack>
                    </Stack>
                    <Typography color="#ffffff" fontSize={'22px'}>{description}</Typography>
                    <Stack direction={'row'} gap={2}>
                        {/* Buttons going to GitHub, Demo, and Figma */}
                        {githubLink ? <ButtonLink href={githubLink}>
                            <GitHubIcon />
                            <Typography>GitHub</Typography>
                        </ButtonLink> : ''}
                        {demoLink ? <ButtonLink href={demoLink}>
                            <Enter />
                            <Typography>Demo</Typography>
                        </ButtonLink> : ''}
                        {figmaLink ? <ButtonLink href={figmaLink}>
                            <Image src={FigmaIcon} alt="Figma icon" sx={{ width: '15px' }} />
                            <Typography>Figma</Typography>
                        </ButtonLink> : ''}
                    </Stack>
                </Stack>
            </Stack >
        </SlideIn>
    )
}
import { Stack, Typography, Link } from "@mui/material"
import { Image } from "../Image"
import { SkillAttribute } from "./parts/SkillAttribute"
import type { ProjectTileType } from "../../../types/ProjectTypes"

export const ProjectTile = ({ imgSrc, imgAlt, title, skills, description, githubLink, demoLink, figmaLink, reverse }: ProjectTileType) => {

    return (
        <Stack direction={reverse ? 'row-reverse' : 'row'} justifyContent={'space-between'} mt={10}>
            <Image src={imgSrc} alt={imgAlt} sx={{ width: '600px', height: '330px' }} />
            <Stack width={'500px'}>
                <Typography variant="h3" color="#ffffff">{title}</Typography>
                <Stack direction={'row'} spacing={1}>
                    {skills ? skills.map((skill) => {
                        return <SkillAttribute bgColor={skill.bgColor}>{skill.name}</SkillAttribute>
                    }) : ''}
                </Stack>
                <Typography color="#ffffff">{description}</Typography>
                <Stack direction={'row'}>
                    {/* Buttons going to GitHub, Demo, and Figma */}
                    <Link href="google.com" sx={{ color: 'white' }}>{githubLink}</Link>
                    <Link href="google.com" sx={{ color: 'white' }}>{demoLink}</Link>
                    <Link href="google.com" sx={{ color: 'white' }}>{figmaLink}</Link>
                </Stack>
            </Stack>
        </Stack >
    )
}
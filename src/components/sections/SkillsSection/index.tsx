import { Stack, Box, Grid, Slide } from "@mui/material"
import { Section } from "../../blocks/Section"
import { SectionHeader } from "../../blocks/SectionHeader/SectionHeader"
import { HeaderStyles } from "./SkillStyles"
import { SkillTile } from "./parts/SkillTile"
import { SkillTileData } from "../../../data/Skills"
import GridBG from "../../../assets/grid2.png"

export const SkillSection = () => {

    return (
        <Section bgImgSrc={GridBG} imgOpacity={"15%"}>
            <Stack sx={{ width: '100%' }} gap={3} justifyContent={'center'} alignItems={'center'} mb={10}>
                <SectionHeader sx={HeaderStyles}>Skills & Technology</SectionHeader>
                <Box sx={{ backgroundImage: 'linear-gradient(90deg,rgba(146, 69, 255, 1) 0%, rgba(233, 89, 255, 1) 100%)', width: { xs: '200px', md: '300px' }, height: 8, borderRadius: 10, padding: 0 }} />
            </Stack>
            <Grid container gap={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {SkillTileData.map((skill, index) => (
                    <Slide
                        key={index}
                        in={true}
                        direction={index % 2 === 0 ? 'left' : 'right'}
                        timeout={800}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Box>
                            <SkillTile
                                skill={skill.skill}
                                skillImg={skill.skillImg}
                                value={skill.value}
                            />
                        </Box>
                    </Slide>
                ))}
            </Grid>
        </Section >
    )
}
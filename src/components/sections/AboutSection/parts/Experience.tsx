import { Box, Stack, Typography } from "@mui/material"
import { CustomListItem } from "./ListItem"
import { ExperienceData } from "../../../../data/ExperienceData"

export const Experience = () => {

    return (
        <Stack sx={{
            flex: 2,
            justifyContent: 'center'
        }}>
            <Stack sx={{ color: '#ffffff', padding: 7 }}>
                <Typography variant="h4" fontWeight={'bold'}>Experience</Typography>
                <Stack gap={5}>
                    {ExperienceData.map((experience) => <Stack>
                        <Stack direction={'row'} justifyContent={'space-between'} mt={3}>
                            <Box>
                                <Typography variant="h6">{experience.companyName}</Typography>
                                <Typography color="#bdbdbdff">{experience.title}</Typography>
                            </Box>
                            <Box textAlign={'right'}>
                                <Typography variant="h6">{experience.datesWorked}</Typography>
                                <Typography color="#bdbdbdff">{experience.workType}</Typography>
                            </Box>
                        </Stack>
                        <Stack gap={2} mt={3}>
                            {experience.duties.map((duty) => <CustomListItem>{duty}</CustomListItem>)}
                        </Stack>
                    </Stack>)}
                </Stack>
            </Stack>
        </Stack>
    )
}
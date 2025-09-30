import { Typography, Divider, Stack } from '@mui/material';
import { Section } from '../../blocks/Section';
import { ProjectTile } from '../../blocks/ProjectTile';
import { Tiles } from '../../../data/TileData';

export const ProjectSection = () => {
  return (
    <Section sx={{ paddingBottom: '150px' }} id="projects">
      <Divider
        sx={{
          '&::before, &::after': {
            borderColor: '#c4c4c4ff',
          },
        }}
      >
        <Typography
          color="#c4c4c4ff"
          px={{ xs: 0, sm: 5 }}
          fontSize={{ xs: '16px' }}
        >
          Some of my latest work
        </Typography>
      </Divider>
      {/* Rest of content here */}
      <Stack
        gap={10}
        sx={{
          alignItems: { sm: 'center' },
          justifyContent: { sm: 'center' },
        }}
      >
        {Tiles.map((tile, index) => (
          <ProjectTile
            key={index}
            imgSrc={tile.imgSrc}
            imgAlt={tile.imgAlt}
            title={tile.title}
            skills={tile.skills}
            description={tile.description}
            githubLink={tile.githubLink}
            figmaLink={tile.figmaLink}
            demoLink={tile.demoLink}
            reverse={tile.reverse ? true : false}
          />
        ))}
      </Stack>
    </Section>
  );
};

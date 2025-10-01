import type { ProjectTileType } from '../types/ProjectTypes';
import { React, TypeScript, MUI, ESLint } from './SkillAttributeData';
import PortfolioSite from '../assets/project-images/portfolio-image.png';

export const Tiles: ProjectTileType[] = [
  {
    imgSrc: PortfolioSite,
    imgAlt: 'Screenshot of Joshuas Portfolio (this page)',
    title: 'Joshs 2025 Portfolio',
    skills: [React, TypeScript, MUI, ESLint],
    description:
      'A quick explanation and description of the project, explaining what it does, and what my inspiration was. I don’t need to do too much detail.',
    githubLink: 'google.com',
    figmaLink: 'test',
    demoLink: 'test',
  },
];

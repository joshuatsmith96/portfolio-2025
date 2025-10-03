import type { ProjectTileType } from '../types/ProjectTypes';
import { React, TypeScript, MUI, ESLint, Tailwind } from './SkillAttributeData';
import PortfolioSite from '../assets/project-images/portfolio-image.png';
import SoleStyle from '../assets/project-images/solestyle.png';

export const Tiles: ProjectTileType[] = [
  {
    imgSrc: PortfolioSite,
    imgAlt: 'Screenshot of Joshuas Portfolio (this page)',
    title: 'Joshs 2025 Portfolio',
    skills: [React, TypeScript, MUI, ESLint],
    description:
      'Welcome to the website you’re on right now! For this portfolio, I decided to take a different approach. Instead of following the usual design trends, I built something unique. The site features a command-prompt–style interface, letting users type commands that dynamically interact with the page.',
    githubLink: 'https://github.com/joshuatsmith96/portfolio-2025',
    figmaLink:
      'https://www.figma.com/design/bVs4UssoLMTQxPlMAeKtkC/Untitled?node-id=0-1&p=f&t=5aMPw4xXeYHsYE6I-0',
  },
  {
    imgSrc: SoleStyle,
    imgAlt: 'SoleStyle ecommerce mockup image',
    title: 'SoleStyle - Ecommerce',
    skills: [React, TypeScript, Tailwind],
    description:
      'This site is a demonstration of my front-end skills. I built it as a way to explore creating a front-end eCommerce platform. You’ll notice there’s no backend, and that’s intentional. The focus is entirely on the frontend, while still giving the appearance of dynamic backend responses.',
    githubLink: 'https://github.com/joshuatsmith96/portfolio-2025',
    figmaLink:
      'https://www.figma.com/design/bVs4UssoLMTQxPlMAeKtkC/Untitled?node-id=0-1&p=f&t=5aMPw4xXeYHsYE6I-0',
    reverse: true,
  },
];

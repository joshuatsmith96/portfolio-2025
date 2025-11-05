import type { ProjectTileType } from '../types/ProjectTypes';
import {
  React,
  TypeScript,
  MUI,
  ESLint,
  Tailwind,
  NodeJS,
  GeminiAI,
  Clerk,
  MongoDB,
} from './SkillAttributeData';
import PortfolioSite from '../assets/project-images/portfolio-image.png';
import SoleStyle from '../assets/project-images/solestyle.png';
import AIFactChecker from '../assets/project-images/AI Fact Checker.png';
import TrackE from '../assets/project-images/Track-E.png';

export const Tiles: ProjectTileType[] = [
  {
    imgSrc: TrackE,
    imgAlt: '',
    title: 'Track-E: Task Management',
    skills: [React, TypeScript, MUI, NodeJS, Clerk, MongoDB],
    description:
      'A full stack todo application that allows for users to create their own "boards" and "lists". ',
    githubLink: 'https://github.com/joshuatsmith96/Track-E',
    demoLink: 'https://track-e.joshuasportfolio.org/',
    reverse: true,
  },
  {
    imgSrc: AIFactChecker,
    imgAlt: 'AI Fact Checker website thumbnail',
    title: 'AI Fact Checker',
    skills: [React, TypeScript, MUI, NodeJS, GeminiAI],
    description:
      'A simple to use fact checker that utilizes AI to generate a dashboard of information based on a claim.',
    githubLink: 'https://github.com/joshuatsmith96/ai-fact-checker-2',
    demoLink: 'https://aifactchecker.joshuasportfolio.org/',
  },
  {
    imgSrc: SoleStyle,
    imgAlt: 'SoleStyle ecommerce mockup image',
    title: 'SoleStyle - Ecommerce',
    skills: [React, TypeScript, Tailwind],
    description:
      'A UI for an e-commerce store. This site is a demonstration of my front-end skills. I built it as a way to explore creating a front-end eCommerce platform. You’ll notice there’s no backend, and that’s intentional. The focus is entirely on the frontend, while still giving the appearance of dynamic backend responses.',
    githubLink: 'https://github.com/joshuatsmith96/portfolio-2025',
    demoLink: 'https://solestyle.joshuasportfolio.org',
    figmaLink:
      'https://figma.com/design/MzhwStaWgCcDWfJmPZUGoL/Shoe-Commerce-Store?t=pc1KMvG9NGVzS82l-0',
    reverse: true,
  },
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
];

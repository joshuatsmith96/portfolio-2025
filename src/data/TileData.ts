import type { ProjectTileType } from "../types/ProjectTypes"
import TestImage from '../assets/pattern1.png'
import { React, TypeScript, MUI } from "./SkillAttributeData"

export const Tiles: ProjectTileType[] = [
    {
        imgSrc: TestImage,
        imgAlt: "Test alt text",
        title: "Test Project",
        skills: [
            React,
            TypeScript,
            MUI
        ],
        description: "A quick explanation and description of the project, explaining what it does, and what my inspiration was. I don’t need to do too much detail.",
        githubLink: 'google.com',
        figmaLink: "test",
        demoLink: "test",
        reverse: true
    },
    {
        imgSrc: TestImage,
        imgAlt: "Test alt text",
        title: "Test Project",
        skills: [
            React,
            TypeScript,
            MUI
        ],
        description: "A quick explanation and description of the project, explaining what it does, and what my inspiration was. I don’t need to do too much detail.",
        githubLink: 'google.com',
        figmaLink: "test",
        demoLink: "test"
    }
]
import type { ProjectTileType } from "../types/ProjectTypes"
import TestImage from '../assets/pattern1.png'
import { React, TypeScript } from "./SkillAttributeData"

export const Tiles: ProjectTileType[] = [
    {
        imgSrc: TestImage,
        imgAlt: "Test alt text",
        title: "Test Project",
        skills: [
            React,
            TypeScript
        ],
        description: "Just a test description",
    }
]
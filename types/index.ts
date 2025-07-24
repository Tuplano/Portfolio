import type { StaticImageData } from 'next/image';


export interface Project {
  id: number
  title: string
  description: string
image: string | StaticImageData;
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'design'
}

export interface NavItem {
  label: string
  href: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  social: {
    github: string
    linkedin: string
    twitter?: string
  }
}
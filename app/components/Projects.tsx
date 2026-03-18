'use client'
import { Project } from '@/types'
import Image from 'next/image'
import project1Img from '@/app/assets/projects/project1.png'
import project2Img from '@/app/assets/projects/project2.png'
import project3Img from '@/app/assets/projects/project3.png'
import project4Img from '@/app/assets/projects/project4.jpg'
import project5Img from '@/app/assets/projects/project5.png'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform (User)',
    description: 'A complete e-commerce solution with a user interface. It features product browsing, add to cart, Stripe payment integration, and order history viewing.',
    image: project1Img,
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://e-commerce-user-nu.vercel.app/',
    githubUrl: 'https://github.com/Tuplano/e-commerce-user',
  },
  {
    id: 2,
    title: 'E-Commerce Platform (Admin)',
    description: 'An admin dashboard for managing the e-commerce platform(). Features include product management, inventory updates, order tracking, and customer overview.',
    image: project2Img,
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://e-commerce-admin-five-cyan.vercel.app/auth/login',
    githubUrl: 'https://github.com/Tuplano/e-commerce-admin',
  },
  {
    id: 3,
    title: 'JobFind Portal',
    description: 'A job portal for CvSU graduating students. Includes a 3-role system (Admin, Company, Student), job posting, resume uploading, email verification, and admin management.',
    image: project3Img,
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 4,
    title: 'Cloud Payroll System',
    description: 'An internal HR payroll solution built at Integr8 Software Solution. Automates employee payroll with ledger tracking, loan/deduction handling, and timekeeping integration.',
    image: project4Img,
    technologies: ['VB.NET', 'JavaScript', 'Microsoft SQL Server', 'Bootstrap'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 5,
    title: 'Internal HR System Enhancement',
    description: 'Improved an internal HR system at Integr8 Software Solution — enhanced UI with Bootstrap, fixed code logic issues, and optimized SQL queries.',
    image: project5Img,
    technologies: ['ASP.NET', 'JavaScript', 'Microsoft SQL Server'],
    liveUrl: '',
    githubUrl: '',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <p className="text-lime-400 font-mono text-sm mb-3">projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          Things I&apos;ve built
        </h2>
        <p className="text-zinc-400 mb-12 max-w-xl">
          A mix of personal projects and professional work I&apos;ve contributed to.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-zinc-600 transition-colors duration-200"
            >
              <div className="relative h-44 overflow-hidden bg-zinc-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm font-mono">
                    no preview
                  </div>
                )}
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-zinc-100 font-semibold text-base leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0 mt-0.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-lime-400 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-100 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-400 border border-zinc-700 text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/Tuplano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm border border-zinc-800 hover:border-zinc-600 px-5 py-2.5 rounded-md"
          >
            <Github size={16} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

// components/Projects.tsx
"use client";
import { useState } from "react";
import { Project } from "@/types";
import Image from "next/image";
import project1Img from "@/app/assets/projects/project1.png";
import project2Img from "@/app/assets/projects/project2.png";
import project3Img from "@/app/assets/projects/project3.png";
import project4Img from "@/app/assets/projects/project4.jpg";
import project5Img from "@/app/assets/projects/project5.png";
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform (User)",
    description:
      "A complete e-commerce solution with a user interface. It features product browsing, add to cart, Stripe payment integration, and order history viewing.",
    image: project1Img,
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://e-commerce-user-ten.vercel.app/",
    githubUrl: "https://github.com/Tuplano/e-commerce-user",
  },
  {
    id: 2,
    title: "E-Commerce Platform (Admin)",
    description:
      "An admin dashboard for managing the e-commerce platform. Features include product management, inventory updates, order tracking, and customer overview.",
    image: project2Img,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Tuplano/e-commerce-admin",
  },
  {
    id: 3,
    title: "JobFind Portal (PHP)",
    description:
      "A job portal built for CvSU graduating students. It includes a 3-role system (Admin, Company, Student), with company job posting, student resume uploading, email verification, and admin account management. Designed with JavaScript-enhanced UI and hosted via Hostinger.",
    image: project3Img,
    technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Cloud Payroll System",
    description:
      "An internal HR payroll solution developed during my job at Integr8 Software Solution. Built to automate employee payroll processing with features like ledger tracking, loan and deduction handling, and timekeeping data integration.",
    image: project4Img,
    technologies: ["VB.NET", "JavaScript", "Microsoft SQL Server", "Bootstrap"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Internal HR System Enhancement",
    description:
      "Worked on an internal HR system at Integr8 Software Solution. Improved UI using Bootstrap, enhanced several system functionalities, and fixed issues related to code logic and SQL queries for better performance and maintainability.",
    image: project5Img,
    technologies: ["ASP.NET", "JavaScript", "Microsoft SQL Server"],
    liveUrl: "",
    githubUrl: "",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-lime-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Here are some projects that I created and participated in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-lime-400/50
 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-48 bg-slate-700 flex items-center justify-center text-gray-400 text-sm">
                    No image available
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-lime-500 text-white px-3 py-1 rounded-full text-sm hover:bg-lime-600 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm hover:bg-slate-600 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700/50 text-lime-300 px-2 py-1 rounded-md text-xs border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-xs py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Tuplano" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-all duration-200 border border-slate-600 hover:border-lime-400">
              View All Projects →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

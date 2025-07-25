// components/Skills.tsx
"use client";
import { useState } from "react";
import { Skill } from "@/types";
const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "design" },
  { name: "Adobe XD", level: 85, category: "design" },
];

const categories = ["frontend", "backend", "tools", "design"] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-lime-950 via-emerald-900 to-green-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-lime-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-500 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 capitalize ${
                activeCategory === category
                  ? "bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-lg"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-semibold text-lg">
                  {skill.name}
                </h3>
                <span className="text-lime-400 font-bold">{skill.level}%</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideIn 1s ease-out ${index * 100}ms both`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Tech Stack I Love
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "PHP",
              "Node.js",
              "MongoDB",
              "MySQL",
              "Git",
              "ASP.NET",
              "VB.NET",
            ].map((tech) => (
              <div
                key={tech}
className="bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 text-gray-300 hover:border-lime-400/50 hover:text-lime-400 transition-all duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

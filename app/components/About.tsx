import Image from "next/image";
import profilePic from "@/app/assets/profile/profile.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiSpringboot,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDotnet,
} from "react-icons/si";
export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-lime-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-500 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm an aspiring full-stack developer with hands-on experience
              building web applications that are functional, user-focused, and
              responsive. My journey began with a curiosity about how websites
              work, which quickly turned into a passion for creating clean,
              intuitive digital experiences — from front-end interfaces to
              back-end logic and APIs.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I’ve worked with technologies like Next.js, Spring Boot, MongoDB,
              and Tailwind CSS, and I enjoy turning ideas into working solutions
              through real-world projects. Whether I’m designing user flows,
              optimizing performance, or connecting databases, I approach each
              task with curiosity, consistency, and a desire to keep learning
              and improving.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 text-white text-4xl">
              <SiHtml5
                title="HTML5"
                className="hover:text-orange-500 transition"
              />
              <SiCss3 title="CSS3" className="hover:text-blue-400 transition" />
              <SiJavascript
                title="JavaScript"
                className="hover:text-yellow-300 transition"
              />
              <SiReact
                title="React"
                className="hover:text-cyan-400 transition"
              />
              <SiNextdotjs
                title="Next.js"
                className="hover:text-black transition"
              />
              <SiTailwindcss
                title="Tailwind CSS"
                className="hover:text-teal-300 transition"
              />
              <SiDotnet
                title="ASP.NET / VB.NET"
                className="hover:text-purple-300 transition"
              />
              <SiPhp title="PHP" className="hover:text-indigo-400 transition" />
              <SiSpringboot
                title="Spring Boot"
                className="hover:text-green-500 transition"
              />
              <SiNodedotjs
                title="Node.js"
                className="hover:text-green-400 transition"
              />
              <SiMongodb
                title="MongoDB"
                className="hover:text-green-600 transition"
              />
              <SiMysql
                title="MySQL"
                className="hover:text-blue-300 transition"
              />
              <SiGit title="Git" className="hover:text-orange-400 transition" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-lime-500/20 to-green-500/20 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-lime-400 shadow-lg">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

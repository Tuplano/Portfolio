import Image from 'next/image'
import profilePic from '@/app/assets/profile/profile.png'
import { Separator } from '@/components/ui/separator'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiPhp, SiNodedotjs, SiMongodb, SiMysql, SiGit, SiDotnet,
} from 'react-icons/si'

const techStack = [
  { icon: SiHtml5, label: 'HTML5', color: 'hover:text-orange-500' },
  { icon: SiCss3, label: 'CSS3', color: 'hover:text-blue-400' },
  { icon: SiJavascript, label: 'JavaScript', color: 'hover:text-yellow-300' },
  { icon: SiReact, label: 'React', color: 'hover:text-cyan-400' },
  { icon: SiNextdotjs, label: 'Next.js', color: 'hover:text-zinc-100' },
  { icon: SiTailwindcss, label: 'Tailwind', color: 'hover:text-teal-300' },
  { icon: SiDotnet, label: 'ASP.NET', color: 'hover:text-purple-300' },
  { icon: SiPhp, label: 'PHP', color: 'hover:text-indigo-400' },
  { icon: SiNodedotjs, label: 'Node.js', color: 'hover:text-green-400' },
  { icon: SiMongodb, label: 'MongoDB', color: 'hover:text-green-500' },
  { icon: SiMysql, label: 'MySQL', color: 'hover:text-blue-300' },
  { icon: SiGit, label: 'Git', color: 'hover:text-orange-400' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lime-400 font-mono text-sm mb-3">about me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6">
              A developer based in Cavite, PH.
            </h2>

            <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
              <p>
                I&apos;m a full-stack developer in the making, with a focus on building practical and user-friendly web applications. I started out just curious about how websites worked, and over time that curiosity grew into a genuine interest in creating smooth, functional sites.
              </p>
              <p>
                I&apos;ve worked with tools like Next.js, ASP.NET, MongoDB, and Tailwind CSS, and I like figuring out how to turn ideas into working projects.
              </p>
            </div>

            <Separator className="my-8 bg-zinc-800" />

            <p className="text-zinc-500 text-sm font-mono mb-4">technologies I work with</p>
            <div className="flex flex-wrap gap-5 text-3xl text-zinc-500">
              {techStack.map(({ icon: Icon, label, color }) => (
                <Icon key={label} title={label} className={`transition-colors duration-200 ${color}`} />
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-zinc-800">
                <Image
                  src={profilePic}
                  alt="Kevin Tuplano"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-lime-400/30 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

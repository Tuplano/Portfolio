'use client'
import { Badge } from '@/components/ui/badge'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['Next.js', 'TanStack Start', 'React', 'Vue.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Laravel', 'PHP', 'ASP.NET', 'VB.NET'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Supabase', 'MySQL'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <p className="text-lime-400 font-mono text-sm mb-3">skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          What I work with
        </h2>
        <p className="text-zinc-400 mb-12 max-w-xl">
          A mix of frontend, backend, and tools I&apos;ve picked up building real projects.
        </p>

        <div className="grid sm:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 border border-zinc-700 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

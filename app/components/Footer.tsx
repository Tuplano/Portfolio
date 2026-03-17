'use client'
import { Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-mono text-sm text-zinc-400">tuplano<span className="text-lime-400">.dev</span></span>
          <span className="text-zinc-700 text-xs">&copy; {currentYear} Kevin Tuplano</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Tuplano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:kevintuplano11@gmail.com"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

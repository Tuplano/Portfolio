'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentWord = roles[currentRole]

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      } else {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-lime-400 font-mono text-sm mb-4 tracking-wide">
            Hi, I&apos;m Kevin —
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 leading-tight mb-4">
            I build things<br />for the web.
          </h1>

          <div className="text-xl md:text-2xl text-zinc-400 mb-8 h-8 flex items-center">
            <span className="font-mono">
              {displayText}
              <span className="text-lime-400 animate-pulse ml-0.5">|</span>
            </span>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
            I make websites that are simple, responsive, and easy to use. I enjoy working on both the look and the logic — making sure things not only work well but feel right to use.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold px-6"
            >
              View My Work
            </Button>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-600 px-6"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

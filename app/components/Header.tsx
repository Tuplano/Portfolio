'use client'
import { useState, useEffect } from 'react'
import { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#home')}
            className="font-mono text-sm text-zinc-100 hover:text-lime-400 transition-colors"
          >
            tuplano<span className="text-lime-400">.dev</span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-lime-400 bg-lime-400/10'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 py-4 border-t border-zinc-800 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-lime-400 bg-lime-400/10'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

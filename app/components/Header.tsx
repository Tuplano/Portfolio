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
    setIsMobileMenuOpen(false) // close menu on click
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-lime-400">{'<'}</span>
            Tuplano
            <span className="text-lime-400">{'/>'}</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`text-gray-300 hover:text-lime-400 transition-colors duration-200 relative ${
                    activeSection === item.href.replace('#', '') 
                      ? 'text-lime-400' 
                      : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-lime-400 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 text-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-gray-300 hover:text-lime-400 transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '') 
                      ? 'text-lime-400' 
                      : ''
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
